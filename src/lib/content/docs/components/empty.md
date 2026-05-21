---
title: Empty
description: Use the Empty component to display an empty state.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="empty-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}empty.json`} />

## Usage

<CodeBlock name="empty-usage" />


## Examples

### Outline

Use the `border` utility class to create an outline empty state.

<ComponentPreview name="empty-outline" />

### Background

Use the `bg-*` and `bg-gradient-*` utilities to add a background to the empty state.

<ComponentPreview name="empty-background" />

### Avatar

Use the `EmptyMedia` component to display an avatar in the empty state.

<ComponentPreview name="empty-avatar" />

### Avatar Group

Use the `EmptyMedia` component to display an avatar group in the empty state.

<ComponentPreview name="empty-avatar-group" />
