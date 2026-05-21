---
title: Tooltip
description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="tooltip-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}tooltip.json`} />

## Usage

The `Tooltip.Provider` component should be placed once in your root layout, wrapping all content that will contain tooltips. This ensures that only one tooltip within the provider can be open at a time.

<CodeBlock name="tooltip-usage-layout" />

Then use tooltips anywhere in your app:

<CodeBlock name="tooltip-usage" />

### Nested Providers

You can nest providers to create groups with different settings. Tooltips use the closest ancestor provider. This is useful when you want instant tooltips in specific areas:

<CodeBlock name="tooltip-nested-providers" />
