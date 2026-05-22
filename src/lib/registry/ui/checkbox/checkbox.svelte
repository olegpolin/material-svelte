<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import CheckIcon from "@lucide/svelte/icons/check";
	import MinusIcon from "@lucide/svelte/icons/minus";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	data-slot="checkbox"
	class={cn(
		"peer relative flex size-[18px] shrink-0 items-center justify-center rounded-[2px] border-2 border-muted-foreground bg-transparent transition-colors outline-none",
		"data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
		"data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary-foreground",
		"hover:before:absolute hover:before:inset-[-10px] hover:before:rounded-full hover:before:bg-foreground/8",
		"data-[state=checked]:hover:before:bg-primary/8",
		"focus-visible:before:absolute focus-visible:before:inset-[-10px] focus-visible:before:rounded-full focus-visible:before:bg-foreground/12",
		"aria-invalid:border-destructive",
		"disabled:cursor-not-allowed disabled:opacity-40",
		className
	)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<div data-slot="checkbox-indicator" class="relative text-current">
			{#if checked}
				<CheckIcon class="size-3.5 stroke-[3]" />
			{:else if indeterminate}
				<MinusIcon class="size-3.5 stroke-[3]" />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
