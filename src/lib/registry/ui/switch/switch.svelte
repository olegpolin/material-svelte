<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		size = "default",
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> & {
		size?: "sm" | "default";
	} = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	data-slot="switch"
	data-size={size}
	class={cn(
		"peer group/switch relative inline-flex shrink-0 items-center rounded-full border-2 transition-colors outline-none",
		"data-checked:bg-primary data-checked:border-primary",
		"data-unchecked:bg-muted data-unchecked:border-muted-foreground",
		"data-[size=default]:h-8 data-[size=default]:w-[52px]",
		"data-[size=sm]:h-5 data-[size=sm]:w-9",
		"focus-visible:ring-2 focus-visible:ring-ring/50",
		"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
		"after:absolute after:-inset-x-3 after:-inset-y-2",
		"data-disabled:cursor-not-allowed data-disabled:opacity-40",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		data-slot="switch-thumb"
		class={cn(
			"pointer-events-none block rounded-full ring-0 transition-[transform,background-color,width,height]",
			"group-data-[size=default]/switch:data-checked:size-6 group-data-[size=default]/switch:data-unchecked:size-4",
			"group-data-[size=sm]/switch:data-checked:size-4 group-data-[size=sm]/switch:data-unchecked:size-2.5",
			"data-checked:bg-primary-foreground data-unchecked:bg-muted-foreground",
			"group-data-[size=default]/switch:data-checked:translate-x-[22px] group-data-[size=default]/switch:data-unchecked:translate-x-1.5",
			"group-data-[size=sm]/switch:data-checked:translate-x-[14px] group-data-[size=sm]/switch:data-unchecked:translate-x-1",
			"rtl:data-[state=checked]:-translate-x-[22px]"
		)}
	/>
</SwitchPrimitive.Root>
