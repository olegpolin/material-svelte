import type { ComponentLink } from './navigation';

/**
 * Server-only module that uses import.meta.glob to extract component
 * metadata from markdown files. This keeps the glob out of client bundles.
 */
const metadataModules = import.meta.glob('/src/lib/content/docs/components/*.md', {
  eager: true,
  import: 'metadata'
}) as Record<string, { title: string; description: string }>;

const components: ComponentLink[] = [];

for (const path in metadataModules) {
  const componentMetadata = metadataModules[path];
  components.push({
    title: componentMetadata.title,
    href: `/docs/components/${path.split('/').pop()?.replace('.md', '')}`
  });
}

export const componentLinks: ComponentLink[] = components;
