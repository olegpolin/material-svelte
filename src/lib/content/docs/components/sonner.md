---
title: Sonner
description: An opinionated toast component for Svelte.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="sonner-demo" class="mb-4" />

## About

The Sonner component is provided by [svelte-sonner](https://svelte-sonner.vercel.app/), which is a Svelte port of [Sonner](https://sonner.emilkowal.ski/), originally created by [Emil Kowalski](https://twitter.com/emilkowalski_) for React.

## Installation

<div class="font-heading mt-8 scroll-m-32 text-base font-medium tracking-tight" role="heading" aria-level="3">Setup theme support</div>

By default, Sonner will use the user's system preferences to determine whether to show the light or dark theme. To get around this, you can either pass in a custom `theme` prop to the component, or simply use [mode-watcher](https://github.com/svecosystem/mode-watcher) which you can hardcode to `dark` or `light` mode should you wish.

You can learn more about setting up Dark Mode support [here](/docs/dark-mode).

If you wish to opt out of Dark Mode support, you can uninstall `mode-watcher` and remove the `theme` prop from the component after installing via CLI, or manually install the component and don't include `mode-watcher`

<div class="font-heading mt-8 scroll-m-32 text-base font-medium tracking-tight" role="heading" aria-level="3">Run the following command:</div>

<CodeBlock source={`${registryAddCommandPrefix}sonner.json`} class="my-6" />

<div class="font-heading mt-8 scroll-m-32 text-base font-medium tracking-tight" role="heading" aria-level="3">Add the Toaster component</div>

<CodeBlock name="sonner-installation" class="my-6" />

## Usage

<CodeBlock name="sonner-usage" />


## Examples

<ComponentPreview name="sonner-examples" />
