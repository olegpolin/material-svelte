---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="dropdown-menu-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}dropdown-menu.json`} />

## Usage

<CodeBlock name="dropdown-menu-usage" />


## Examples

### Checkboxes

<ComponentPreview name="dropdown-menu-checkboxes" />

### Radio Group

<ComponentPreview name="dropdown-menu-radio-group" />
