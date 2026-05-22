<script lang="ts">
	import { Slider as SliderPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		orientation = "horizontal",
		class: className,
		...restProps
	}: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<SliderPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="slider"
	{orientation}
	class={cn(
		"data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-40 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col py-3",
		className
	)}
	{...restProps}
>
	{#snippet children({ thumbItems })}
		<span
			data-slot="slider-track"
			data-orientation={orientation}
			class={cn(
				"bg-secondary rounded-full data-horizontal:h-4 data-horizontal:w-full data-vertical:h-full data-vertical:w-4 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
			)}
		>
			<SliderPrimitive.Range
				data-slot="slider-range"
				class={cn(
					"bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
				)}
			/>
		</span>
		{#each thumbItems as thumb (thumb.index)}
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				index={thumb.index}
				class="bg-primary relative block h-11 w-1 shrink-0 rounded-full ring-2 ring-background select-none transition-transform after:absolute after:-inset-3 hover:scale-y-95 focus-visible:outline-hidden focus-visible:ring-primary active:scale-y-90 disabled:pointer-events-none disabled:opacity-40"
				aria-label={`Thumb ${thumb.index + 1}`}
			/>
		{/each}
	{/snippet}
</SliderPrimitive.Root>
