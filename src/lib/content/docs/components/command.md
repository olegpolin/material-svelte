---
title: Command
description: Fast, composable, unstyled command menu for Svelte.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="command-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}command.json`} />

## Usage

<CodeBlock name="command-usage" />


## Examples

### Dialog

<ComponentPreview name="command-dialog" />

To show the command menu in a dialog, use the `<Command.Dialog />` component instead of `<Command.Root />`. It accepts props for both the `<Dialog.Root />` and `<Command.Root />` components.

<CodeBlock name="command-menu" />
