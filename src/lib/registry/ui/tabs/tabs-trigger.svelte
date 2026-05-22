<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	data-slot="tabs-trigger"
	class={cn(
		"relative inline-flex h-12 items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors outline-none focus-visible:bg-foreground/8 disabled:pointer-events-none disabled:opacity-40 hover:text-foreground data-[state=active]:text-primary [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 after:absolute after:inset-x-3 after:-bottom-px after:h-[3px] after:rounded-t-full after:bg-primary after:opacity-0 after:transition-opacity data-[state=active]:after:opacity-100",
		className
	)}
	{...restProps}
/>
