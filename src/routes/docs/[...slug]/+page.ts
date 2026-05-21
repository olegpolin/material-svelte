import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import { error } from '@sveltejs/kit';

const modules = import.meta.glob('/src/lib/content/docs/**/*.md');
const exampleModules = import.meta.glob('/src/lib/registry/examples/*.svelte');

export const load: PageLoad = async ({ params, data }) => {
  const path = params.slug && params.slug.length > 0 ? params.slug : 'index';
  const filePath = `/src/lib/content/docs/${path}.md`;

  if (!modules[filePath]) {
    error(404, 'Not Found');
  }

  // Load the markdown component
  const module = (await modules[filePath]()) as { default: Component };

  // Dynamically import only the preview components rendered on this page.
  const exampleComponents: Record<string, Component> = {};
  if (data.previewNames?.length) {
    await Promise.all(
      data.previewNames.map(async (name) => {
        const importFn = exampleModules[`/src/lib/registry/examples/${name}.svelte`];
        if (importFn) {
          const mod = (await importFn()) as { default: Component };
          exampleComponents[name] = mod.default;
        }
      })
    );
  }

  return {
    ...data,
    markdown: module.default,
    exampleComponents
  };
};
