---
title: Skeleton
description: Use to show a placeholder while content is loading.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="skeleton-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}skeleton.json`} />

## Usage

<CodeBlock name="skeleton-usage" />


## Examples

### Card

<ComponentPreview name="skeleton-card" />
