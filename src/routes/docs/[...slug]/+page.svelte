<script lang="ts">
  import type { PageProps } from './$types';
  import type { Attachment } from 'svelte/attachments';
  import { page } from '$app/state';
  import Seo from '$lib/components/seo.svelte';
  import { Badge } from '$lib/registry/ui/badge';
  import { Button } from '$lib/registry/ui/button';
  import DocsToc from '$lib/components/docs-toc.svelte';
  import { findNeighbors } from '$lib/utils/navigation';
  import { githubRepoUrl } from '$lib/constants';
  import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import CodeIcon from '@lucide/svelte/icons/code';

  let { data }: PageProps = $props();
  let Markdown = $derived(data.markdown);

  let neighbors = $derived(findNeighbors(page.url.pathname, data.sidebarNavLinks));

  function applyHeadingIds(ids: string[]): Attachment<HTMLElement> {
    return (node) => {
      const headings = node.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6');
      const limit = Math.min(headings.length, ids.length);
      for (let i = 0; i < limit; i++) headings[i].id = ids[i];
    };
  }
</script>

<Seo
  title={data.meta.title}
  description={data.meta.description || 'Documentation for shadcn-svelte.'}
/>

<div
  class="flex min-w-0 flex-row-reverse items-stretch pt-4 text-[1.05rem] sm:text-[15px] xl:w-full"
>
  <div
    class="sticky top-14.25 z-30 ms-auto hidden h-[calc(100svh-1.5rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex xl:h-[calc(100svh-4rem)]"
  >
    {#if data.toc.length}
      <div class="no-scrollbar overflow-y-auto px-8 pt-4">
        <DocsToc entries={data.toc} slug={data.slug} />
        <div class="h-12"></div>
      </div>
    {/if}
  </div>
  <div class="flex min-w-0 flex-1 flex-col">
    <div
      class="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300"
    >
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <div class="flex items-start justify-between pb-2">
            <h1 class="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
              {data.meta.title}
            </h1>
            <div
              class="fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t border-border/50 bg-background/80 px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none"
            >
              {#if neighbors.previous}
                <Button
                  variant="secondary"
                  size="icon"
                  class="ms-auto size-8 shadow-none md:size-7"
                  href={neighbors.previous.href}
                >
                  <ArrowLeftIcon />
                  <span class="sr-only">Previous</span>
                </Button>
              {/if}
              {#if neighbors.next}
                <Button
                  variant="secondary"
                  size="icon"
                  class="size-8 shadow-none md:size-7"
                  href={neighbors.next.href}
                >
                  <span class="sr-only">Next</span>
                  <ArrowRightIcon />
                </Button>
              {/if}
            </div>
          </div>
          <p class="text-[1.05rem] text-balance text-muted-foreground sm:text-base">
            {data.meta.description}
          </p>
        </div>
        {#if data.slug.startsWith('components/')}
          <div class="flex items-center space-x-2 pt-4">
            <Badge
              href={`https://www.shadcn-svelte.com/docs/components/${data.slug.replace('components/', '')}`}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View shadcn-svelte docs
              <ArrowUpRightIcon />
            </Badge>
            <Badge
              href={`${githubRepoUrl}/tree/main/src/lib/registry/ui/${data.slug.replace('components/', '')}`}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component source
              <CodeIcon />
            </Badge>
          </div>
        {/if}
      </div>
      <div
        class={[data.slug !== 'components' && 'prose-docs', 'mt-8 w-full flex-1']}
        {@attach applyHeadingIds(data.headingIds)}
      >
        <Markdown />
      </div>
    </div>
  </div>
</div>
