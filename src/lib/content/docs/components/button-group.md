---
title: Button Group
description: A container that groups related buttons together with consistent styling.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="button-group-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}button-group.json`} />

## Usage

<CodeBlock name="button-group-usage" />


## Accessibility

- The `ButtonGroup` component has the `role` attribute set to `group`.
- Use `tabindex` to navigate between the buttons in the group.
- Use `aria-label` or `aria-labelledby` to label the button group.

<CodeBlock name="button-group-accessibility" />

## ButtonGroup vs ToggleGroup

- Use the `ButtonGroup` component when you want to group buttons that perform an action.
- Use the `ToggleGroup` component when you want to group buttons that toggle a state.

## Examples

### Orientation

Set the `orientation` prop to change the button group layout.

<ComponentPreview name="button-group-orientation" />

### Size

Control the size of buttons using the `size` prop on individual buttons.

<ComponentPreview name="button-group-size" />

### Nested

Nest `ButtonGroup` components to create button groups with spacing.

<ComponentPreview name="button-group-nested" />

### Separator

The `ButtonGroupSeparator` component visually divides buttons within a group.

Buttons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.

<ComponentPreview name="button-group-separator" />

### Split

Create a split button group by adding two buttons separated by a `ButtonGroupSeparator`.

<ComponentPreview name="button-group-split" />

### Input

Wrap an `Input` component with buttons.

<ComponentPreview name="button-group-input" />

### Input Group

Wrap an `InputGroup` component to create complex input layouts.

<ComponentPreview name="button-group-input-group" />

### Dropdown Menu

Create a split button group with a `DropdownMenu` component.

<ComponentPreview name="button-group-dropdown-menu" />

### Select

Pair with a `Select` component.

<ComponentPreview name="button-group-select" />

### Popover

Use with a `Popover` component.

<ComponentPreview name="button-group-popover" />
