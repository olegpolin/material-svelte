<script lang="ts">
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		"data-slot": dataSlot = "input",
		...restProps
	}: Props = $props();

	const base = [
		"flex h-14 w-full min-w-0 rounded-sm border border-input bg-transparent px-4 text-base text-foreground",
		"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
		"transition-[color,border-color,box-shadow] outline-none",
		"focus-visible:border-primary focus-visible:ring-[1px] focus-visible:ring-primary",
		"hover:border-foreground/70",
		"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
		"disabled:cursor-not-allowed disabled:opacity-40 disabled:border-input",
	].join(" ");
</script>

{#if type === "file"}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			base,
			"pt-4 text-sm font-medium file:me-3 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(base, className)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}
