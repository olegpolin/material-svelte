---
title: Scroll Area
description: Augments native scroll functionality for custom, cross-browser styling.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="scroll-area-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}scroll-area.json`} />

## Usage

<CodeBlock name="scroll-area-usage" />


## Examples

### Horizontal Scrolling

Set the `orientation` prop to `"horizontal"` to enable horizontal scrolling.

<ComponentPreview name="scroll-area-horizontal" />
