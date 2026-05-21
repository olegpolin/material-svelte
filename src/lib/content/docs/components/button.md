---
title: Button
description: Displays a button or a component that looks like a button.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="button-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}button.json`} />

## Usage

<CodeBlock name="button-usage" />


## Examples

### Size

<ComponentPreview name="button-size" />

### Default

<ComponentPreview name="button-default" />

### Outline

<ComponentPreview name="button-outline" />

### Secondary

<ComponentPreview name="button-secondary" />

### Ghost

<ComponentPreview name="button-ghost" />

### Destructive

<ComponentPreview name="button-destructive" />

### Link

<ComponentPreview name="button-link" />

### Icon

<ComponentPreview name="button-icon" />

### With Icon

The spacing between the icon and the text is automatically adjusted based on the size of the button. You do not need any margin on the icon.

<ComponentPreview name="button-with-icon" />

### Href

You can convert the `<button>` into an `<a>` element by simply passing an `href` as a prop.

<CodeBlock name="button-href" />

Alternatively, you can use the `buttonVariants` helper to create a link that looks like a button.

<CodeBlock name="button-href-helper" />
