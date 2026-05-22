<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import CheckIcon from '@lucide/svelte/icons/check';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
	bind:ref
	data-slot="command-item"
	class={cn(
		"group/command-item data-selected:bg-foreground/8 data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-3 rounded-full px-4 py-3 min-h-12 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-full! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 transition-colors",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<CheckIcon class="cn-command-item-indicator ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
</CommandPrimitive.Item>
