---
title: Field
description: Combine labels, controls, and help text to compose accessible form fields and grouped inputs.
---

<script>
  import ComponentPreview from '$lib/components/component-preview.svelte';
  import CodeBlock from '$lib/components/code-block.svelte';
  import { registryAddCommandPrefix } from '$lib/constants';
</script>

<ComponentPreview name="field-demo" class="mb-4" />

## Installation

<CodeBlock source={`${registryAddCommandPrefix}field.json`} />

## Usage

<CodeBlock name="field-usage" />


## Anatomy

The `Field` family is designed for composing accessible forms. A typical field is structured as follows:

<CodeBlock name="field-anatomy" />

- `Field.Field` is the core wrapper for a single field.
- `Field.Content` is a flex column that groups label and description. Not required if you have no description.
- Wrap related fields with `Field.Group`, and use `Field.Set` with `Field.Legend` for semantic grouping.

## Examples

### Input

<ComponentPreview name="field-input" />

### Textarea

<ComponentPreview name="field-textarea" />

### Select

<ComponentPreview name="field-select" />

### Slider

<ComponentPreview name="field-slider" />

### Fieldset

<ComponentPreview name="field-fieldset" />

### Checkbox

<ComponentPreview name="field-checkbox" />

### Radio

<ComponentPreview name="field-radio" />

### Switch

<ComponentPreview name="field-switch" />

### Choice Card

Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.

<ComponentPreview name="field-choice-card" />

### Field Group

Stack `Field` components with `Field.Group`. Add `Field.Separator` to divide them.

<ComponentPreview name="field-field-group" />

### Responsive Layout

- **Vertical fields:** Default orientation stacks label, control, and helper text—ideal for mobile-first layouts.
- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `Field.Content` to keep descriptions aligned.
- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `Field.Group` to switch orientations at specific breakpoints.

<ComponentPreview name="field-responsive-layout" />

## Validation and Errors

- Add `data-invalid` to `Field` to switch the entire block into an error state.
- Add `aria-invalid` on the input itself for assistive technologies.
- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.

<CodeBlock name="field-validation-and-errors" />

## Accessibility

- `Field.Set` and `Field.Legend` keep related controls grouped for keyboard and assistive tech users.
- `Field` outputs `role="group"` so nested controls inherit labeling from `Field.Label` and `Field.Legend` when combined.
- Apply `Field.Separator` sparingly to ensure screen readers encounter clear section boundaries.
