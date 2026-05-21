---
title: Sheet
description: Extends the Dialog component to display content that complements the main content of the screen.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="sheet-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}sheet.json`} />

## Usage

<CodeBlock name="sheet-usage" />


## Examples

### Side

Pass the `side` property to `<Sheet.Content />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

### Size

You can adjust the size of the sheet using CSS classes:

<CodeBlock name="sheet-size" />
