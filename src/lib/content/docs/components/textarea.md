---
title: Textarea
description: Displays a form textarea or a component that looks like a textarea.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="textarea-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}textarea.json`} />

## Usage

<CodeBlock name="textarea-usage" />


## Examples

### Default

<ComponentPreview name="textarea-demo" />

### Disabled

<ComponentPreview name="textarea-disabled" />

### With Label

<ComponentPreview name="textarea-with-label" />

### With Text

<ComponentPreview name="textarea-with-text" />

### With Button

<ComponentPreview name="textarea-with-button" />
