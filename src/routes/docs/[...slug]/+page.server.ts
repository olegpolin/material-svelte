import type { EntryGenerator, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { extractDocsAssets } from '$lib/utils/docs-content.server';
import { generateToc } from '$lib/utils/toc';

type DocModule = {
  metadata: { title: string; description: string };
};

const docModules = import.meta.glob('/src/lib/content/docs/**/*.md', { eager: true }) as Record<
  string,
  DocModule
>;
const rawDocSources = import.meta.glob('/src/lib/content/docs/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

const slugFromPath = (filePath: string) =>
  filePath.replace('/src/lib/content/docs/', '').replace(/\.md$/, '');

export const entries: EntryGenerator = () =>
  Object.keys(docModules).map((filePath) => {
    const slug = slugFromPath(filePath);
    return { slug: slug === 'index' ? '' : slug };
  });

export const load: PageServerLoad = ({ params }) => {
  const path = params.slug && params.slug.length > 0 ? params.slug : 'index';
  const filePath = `/src/lib/content/docs/${path}.md`;

  const mod = docModules[filePath];
  const raw = rawDocSources[filePath];

  if (!mod || !raw) error(404, 'Not Found');

  const { previewNames, exampleSources } = extractDocsAssets(raw);
  const { entries: tocEntries, headingIds } = generateToc(raw);

  return {
    meta: mod.metadata,
    slug: path,
    toc: tocEntries,
    headingIds,
    previewNames,
    exampleSources
  };
};
