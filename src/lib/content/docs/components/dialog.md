---
title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="dialog-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}dialog.json`} />

## Usage

<CodeBlock name="dialog-usage" />


## Examples

### Custom close button

<ComponentPreview name="dialog-close-button" />
