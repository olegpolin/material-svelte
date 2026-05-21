---
title: Avatar
description: An image element with a fallback for representing the user.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="avatar-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}avatar.json`} />

## Usage

<CodeBlock name="avatar-usage" />
