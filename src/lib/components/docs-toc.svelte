<script lang="ts">
  import { resolve } from '$app/paths';
  import type { TocEntry } from '$lib/utils/toc';

  let {
    entries,
    slug,
    class: className
  }: { entries: TocEntry[]; slug: string; class?: string } = $props();

  const hrefPrefix = $derived(resolve(slug === 'index' ? '/docs' : `/docs/${slug}`));
</script>

{#if entries.length}
  <div class={['flex flex-col gap-2 p-4 pt-0 text-sm', className]}>
    <p class="sticky top-0 h-6 bg-background text-xs text-muted-foreground">On This Page</p>
    {#each entries as item (item.url)}
      <a
        href={`${hrefPrefix}${item.url}`}
        class="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[depth=1]:ps-4 data-[depth=2]:ps-6"
        data-depth={item.depth}
      >
        {item.title}
      </a>
    {/each}
  </div>
{/if}
