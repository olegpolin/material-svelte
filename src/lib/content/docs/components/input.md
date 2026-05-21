---
title: Input
description: Displays a form input field or a component that looks like an input field.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="input-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}input.json`} />

## Usage

<CodeBlock name="input-usage" />


## Examples

### Default

<ComponentPreview name="input-demo" />

### File

<ComponentPreview name="input-file" />

### Disabled

<ComponentPreview name="input-disabled" />

### With Label

<ComponentPreview name="input-with-label" />

### With Button

<ComponentPreview name="input-with-button" />
