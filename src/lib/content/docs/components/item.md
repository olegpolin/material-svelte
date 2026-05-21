---
title: Item
description: A versatile component that you can use to display any content.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

The `Item` component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the `ItemGroup` component to create a list of items.

You can pretty much achieve the same result with the `div` element and some classes, but **I've built this so many times** that I decided to create a component for it. Now I use it all the time.

<ComponentPreview name="item-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}item.json`} />

## Usage

<CodeBlock name="item-usage" />


## Item vs Field

Use Field if you need to display a form input such as a checkbox, input, radio, or select.

If you only need to display content such as a title, description, and actions, use `Item`.

## Examples

### Variants

<ComponentPreview name="item-variants" />

### Size

The `Item` component has different sizes for different use cases. For example, you can use the `sm` size for a compact item or the default size for a standard item.

<ComponentPreview name="item-size" />

### Icon

<ComponentPreview name="item-icon" />

### Avatar

<ComponentPreview name="item-avatar" />

### Image

<ComponentPreview name="item-image" />

### Group

<ComponentPreview name="item-group" />

### Header

<ComponentPreview name="item-header" />

### Link

To render an item as a link, use the `child` snippet. The hover and focus states will be applied to the anchor element.

<ComponentPreview name="item-link" />

### Dropdown

<ComponentPreview name="item-dropdown" />
