---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="progress-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}progress.json`} />

## Usage

<CodeBlock name="progress-usage" />
