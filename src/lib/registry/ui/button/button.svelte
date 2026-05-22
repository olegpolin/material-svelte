<script lang="ts" module>
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: [
			"relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full",
			"text-sm font-medium tracking-[0.0071em] whitespace-nowrap select-none",
			"transition-[background-color,color,box-shadow,border-radius,transform] duration-200 ease-out",
			"outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
			"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
			"disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40",
			"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
			"active:scale-[0.97]",
		].join(" "),
		variants: {
			variant: {
				default: [
					"bg-primary text-primary-foreground",
					"hover:bg-primary/92 hover:shadow-sm",
					"active:bg-primary active:rounded-xl",
				].join(" "),
				destructive: [
					"bg-destructive text-white",
					"hover:bg-destructive/92 hover:shadow-sm",
					"active:bg-destructive active:rounded-xl",
					"focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/40",
				].join(" "),
				outline: [
					"border border-border bg-transparent text-primary",
					"hover:bg-primary/8",
					"active:bg-primary/12 active:rounded-xl",
					"dark:border-input",
				].join(" "),
				secondary: [
					"bg-secondary text-secondary-foreground",
					"hover:bg-secondary/85 hover:shadow-sm",
					"active:bg-secondary active:rounded-xl",
				].join(" "),
				ghost: [
					"bg-transparent text-primary",
					"hover:bg-primary/8",
					"active:bg-primary/12 active:rounded-xl",
				].join(" "),
				link: "text-primary underline-offset-4 hover:underline rounded-sm",
			},
			size: {
				default: "h-10 px-4 has-[>svg]:px-4",
				sm: "h-8 px-3 text-[13px] has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4",
				lg: "h-14 px-6 text-[15px] has-[>svg]:px-6 [&_svg:not([class*='size-'])]:size-6",
				icon: "size-10 px-0",
				"icon-sm": "size-8 px-0 [&_svg:not([class*='size-'])]:size-4",
				"icon-lg": "size-14 px-0 [&_svg:not([class*='size-'])]:size-6",
			},
		},
		compoundVariants: [
			{
				variant: "link",
				class: "active:scale-100 active:rounded-sm",
			},
		],
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
