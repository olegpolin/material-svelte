<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onDestroy } from 'svelte';
  import { page } from '$app/state';
  import { Button } from '$lib/registry/ui/button';
  import CopyIcon from '@lucide/svelte/icons/copy';
  import CheckIcon from '@lucide/svelte/icons/check';

  let {
    source,
    name,
    class: className,
    children
  }: {
    source?: string;
    name?: string;
    class?: string;
    children?: Snippet;
  } = $props();

  const registryExampleSources = $derived(
    page.data.exampleSources as Record<string, string> | undefined
  );
  let resolvedSource = $derived(source ?? (name ? registryExampleSources?.[name] : undefined));
  let displaySource = $derived(
    resolvedSource?.replaceAll('$lib/registry/ui', '$lib/components/ui')
  );
  let copySource = $derived(displaySource?.replace(/^\n+/, ''));
  let showCommandTopLine = $derived(
    copySource?.trimStart().startsWith('npx shadcn-svelte') ?? false
  );
  let renderedSource = $derived(showCommandTopLine && copySource ? `\n${copySource}` : copySource);

  let copied = $state(false);
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined;

  const copyToClipboard = async (text: string) => {
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
      return;
    }

    await navigator.clipboard.writeText(text);
    copied = true;

    if (copyResetTimer) {
      clearTimeout(copyResetTimer);
    }

    copyResetTimer = setTimeout(() => {
      copied = false;
    }, 2000);
  };

  onDestroy(() => {
    if (copyResetTimer) {
      clearTimeout(copyResetTimer);
    }
  });
</script>

<div data-slot="code" class={['relative overflow-hidden rounded-lg [&_pre]:max-h-100', className]}>
  {#if children}
    {@render children()}
  {:else if displaySource}
    <Button
      data-slot="copy-button"
      size="icon"
      variant="ghost"
      class="absolute inset-e-2 top-3 z-10 size-7 bg-primary-foreground text-muted-foreground hover:opacity-100 focus-visible:opacity-100"
      onclick={() => copySource && copyToClipboard(copySource)}
    >
      <span class="sr-only">Copy</span>
      {#if copied}
        <CheckIcon />
      {:else}
        <CopyIcon />
      {/if}
    </Button>
    <figure>
      <pre
        class="overflow-x-auto bg-neutral-50 dark:bg-neutral-900 p-4 text-sm leading-relaxed text-neutral-900 dark:text-neutral-200"><code
          >{renderedSource}</code
        ></pre>
    </figure>
  {/if}
</div>
