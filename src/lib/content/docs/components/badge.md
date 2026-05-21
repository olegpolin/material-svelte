---
title: Badge
description: Displays a badge or a component that looks like a badge.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="badge-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}badge.json`} />

## Usage

<CodeBlock name="badge-usage" />


### Link

You can use the `badgeVariants` helper to create a link that looks like a badge.

<CodeBlock name="badge-link" />
