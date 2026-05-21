export type DocsAssets = {
  previewNames: string[];
  exampleSources: Record<string, string>;
};

const TAG_NAME_RE = /<(ComponentPreview|CodeBlock)\s[^>]*\bname=["']([^"']+)["']/g;

const exampleSourceModules = import.meta.glob('/src/lib/registry/examples/*.svelte', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

/**
 * Single-pass scan of a markdown source. Tags that need a Svelte component
 * (ComponentPreview) populate `previewNames`; tags that need raw source
 * (ComponentPreview and CodeBlock) populate `exampleSources`.
 */
export function extractDocsAssets(markdown: string): DocsAssets {
  const previewNames = new Set<string>();
  const sourceNames = new Set<string>();

  TAG_NAME_RE.lastIndex = 0;
  for (let m: RegExpExecArray | null; (m = TAG_NAME_RE.exec(markdown)) !== null; ) {
    const [, tag, name] = m;
    sourceNames.add(name);
    if (tag === 'ComponentPreview') previewNames.add(name);
  }

  const exampleSources: Record<string, string> = {};
  for (const name of sourceNames) {
    const source = exampleSourceModules[`/src/lib/registry/examples/${name}.svelte`];
    if (source) exampleSources[name] = source;
  }

  return { previewNames: [...previewNames], exampleSources };
}
