---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="select-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}select.json`} />

## Usage

<CodeBlock name="select-usage" />


## Examples

### Scrollable

<ComponentPreview name="select-scrollable" />
