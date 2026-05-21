<script lang="ts">
  import * as Command from '$lib/registry/ui/command';
  import * as Dialog from '$lib/registry/ui/dialog';
  import { Button } from '$lib/registry/ui/button';
  import CornerDownLeftIcon from '@lucide/svelte/icons/corner-down-left';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import type { ComponentLink } from '$lib/utils/navigation';

  let open = $state(false);

  const componentLinks = $derived((page.data.componentLinks ?? []) as ComponentLink[]);

  function handleKeydown(e: KeyboardEvent) {
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
      if (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }
      e.preventDefault();
      open = !open;
    }
  }
</script>

<svelte:document onkeydown={handleKeydown} />

<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        class="bg-muted relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64 dark:bg-card"
      >
        <span class="hidden lg:inline-flex">Search components...</span>
        <span class="inline-flex lg:hidden">Search...</span>
      </Button>
    {/snippet}
  </Dialog.Trigger>
  <Dialog.Content
    showCloseButton={false}
    class="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800"
  >
    <Dialog.Header class="sr-only">
      <Dialog.Title>Search components...</Dialog.Title>
      <Dialog.Description>Search for a component to navigate to...</Dialog.Description>
    </Dialog.Header>
    <Command.Root class="rounded-none bg-transparent">
      <Command.Input placeholder="Search components..." />
      <Command.List tabindex={-1} class="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
        <Command.Empty class="py-12 text-center text-sm text-muted-foreground">
          No results found.
        </Command.Empty>
        <Command.Group
          heading="Components"
          class="!p-0 [&_[data-command-group-heading]]:scroll-mt-16 [&_[data-command-group-heading]]:!p-3 [&_[data-command-group-heading]]:!pb-1"
        >
          {#each componentLinks as link (link.title)}
            <Command.Item
              class="h-9 rounded-md border border-transparent !px-3 font-medium data-[selected=true]:border-input data-[selected=true]:bg-input/50"
              value={link.title}
              onSelect={() => {
                open = false;
                if (link.href) goto(link.href);
              }}
            >
              <div
                class="aspect-square size-4 rounded-full border border-dashed border-muted-foreground"
              ></div>
              {link.title}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
    <div
      class="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium text-muted-foreground dark:border-t-neutral-700 dark:bg-neutral-800"
    >
      <div class="flex items-center gap-2">
        <div
          class="pointer-events-none inline-flex h-5 w-5 items-center justify-center rounded-sm border bg-muted font-sans text-xs font-medium text-muted-foreground select-none"
        >
          <CornerDownLeftIcon class="size-3" />
        </div>
        Go to Page
      </div>
    </div>
  </Dialog.Content>
</Dialog.Root>
