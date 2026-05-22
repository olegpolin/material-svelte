<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils.js";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		"data-slot": dataSlot = "textarea",
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	data-slot={dataSlot}
	class={cn(
		"flex field-sizing-content min-h-28 w-full rounded-sm border border-input bg-transparent px-4 py-3 text-base text-foreground",
		"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
		"transition-[color,border-color,box-shadow] outline-none",
		"focus-visible:border-primary focus-visible:ring-[1px] focus-visible:ring-primary",
		"hover:border-foreground/70",
		"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
		"disabled:cursor-not-allowed disabled:opacity-40",
		className
	)}
	bind:value
	{...restProps}
></textarea>
