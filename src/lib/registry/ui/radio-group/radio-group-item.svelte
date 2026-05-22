<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	data-slot="radio-group-item"
	class={cn(
		"group/radio-group-item peer relative aspect-square flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-muted-foreground bg-transparent transition-colors outline-none",
		"data-checked:border-primary",
		"hover:before:absolute hover:before:inset-[-10px] hover:before:rounded-full hover:before:bg-foreground/8",
		"data-checked:hover:before:bg-primary/8",
		"focus-visible:before:absolute focus-visible:before:inset-[-10px] focus-visible:before:rounded-full focus-visible:before:bg-foreground/12",
		"after:absolute after:-inset-x-3 after:-inset-y-2",
		"aria-invalid:border-destructive",
		"disabled:cursor-not-allowed disabled:opacity-40",
		className
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<div data-slot="radio-group-indicator" class="relative flex items-center justify-center">
			{#if checked}
				<div class="size-2.5 rounded-full bg-primary"></div>
			{/if}
		</div>
	{/snippet}
</RadioGroupPrimitive.Item>
