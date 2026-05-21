<script lang="ts">
  import './layout.css';
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.svg';
  import { navigating } from '$app/state';
  import { fade } from 'svelte/transition';
  import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from '$lib/registry/ui/sonner';
  import * as Tooltip from '$lib/registry/ui/tooltip';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import type { LayoutProps } from './$types';

  let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta property="og:image" content={`${page.url.origin}/logo.png`} />
</svelte:head>

<ModeWatcher defaultMode="dark" />

<Toaster richColors />

{#if navigating.to}
  <div
    class="fixed top-0 left-0 z-100 h-1 w-full animate-slide-gradient bg-linear-to-r from-red-500 via-orange-300 to-red-500 bg-size-[200%_100%]"
    in:fade={{ delay: 300 }}
  ></div>
{/if}

<div class="flex min-h-svh flex-col">
  <Header sidebarNavLinks={data.sidebarNavLinks} />

  <main class="flex flex-1 flex-col">
    <Tooltip.Provider>
      {@render children()}
    </Tooltip.Provider>
  </main>

  <Footer />
</div>
