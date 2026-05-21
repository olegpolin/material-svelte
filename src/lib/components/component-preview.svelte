<script lang="ts">
  import type { Component, Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { page } from '$app/state';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { cn } from '$lib/utils';

  const exampleComponents = $derived(
    (page.data.exampleComponents ?? {}) as Record<string, Component>
  );

  let {
    class: className,
    align = 'center',
    component,
    example,
    children,
    name,
    ...restProps
  }: HTMLAttributes<HTMLElement> & {
    align?: 'center' | 'start' | 'end';
    hideCode?: boolean;
    example?: Snippet;
    component?: Component;
    name: string;
  } = $props();

  let previewComponent = $derived(component ?? exampleComponents[name]);
</script>

{#snippet ExampleFallback()}
  {#if previewComponent}
    {@const PreviewComponent = previewComponent}
    <PreviewComponent />
  {:else}
    <p class="text-sm text-muted-foreground">
      Component
      <code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {name}
      </code>
      not found in registry.
    </p>
  {/if}
{/snippet}

<div
  class={cn(
    'no-prose-docs group relative mt-4 mb-12 flex flex-col rounded-lg border overflow-hidden',
    className
  )}
  {...restProps}
>
  <div>
    <div
      data-slot="preview"
      class="preview flex justify-center"
    >
      <div
        data-align={align}
        class="preview flex min-h-112.5 w-full justify-center border-b p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start"
      >
        {#if example}
          {@render example()}
        {:else}
          {@render ExampleFallback()}
        {/if}
      </div>
    </div>
    <CodeBlock class="rounded-none" {name} {children} />
  </div>
</div>
