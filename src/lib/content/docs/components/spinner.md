---
title: Spinner
description: An indicator that can be used to show a loading state.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="spinner-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}spinner.json`} />

## Usage

<CodeBlock name="spinner-usage" />


## Customization

You can replace the default spinner icon with any other icon by editing the `Spinner` component.

<ComponentPreview name="spinner-customization" />

## Examples

### Size

Use the `size-*` utility class to change the size of the spinner.

<ComponentPreview name="spinner-size" />

### Color

Use the `text-*` utility class to change the color of the spinner.

<ComponentPreview name="spinner-color" />

### Button

Add a spinner to a button to indicate a loading state. The `<Button />` will handle the spacing between the spinner and the text.

<ComponentPreview name="spinner-button" />

### Badge

You can also use a spinner inside a badge.

<ComponentPreview name="spinner-badge" />

### Input Group

Input Group can have spinners inside `<InputGroup.Addon>`.

<ComponentPreview name="spinner-input-group" />

### Empty

<ComponentPreview name="spinner-empty" />

### Item

Use the spinner inside `<Item.Media>` to indicate a loading state.

<ComponentPreview name="spinner-item" />
