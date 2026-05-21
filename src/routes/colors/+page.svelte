<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import HeroSection from '$lib/components/hero-section.svelte';

  const title = 'Tailwind Colors in Every Format';
  const description =
    'The complete Tailwind color palette in HEX, RGB, HSL, CSS variables, and classes. Ready to copy and paste into your project.';
</script>

<Seo {title} {description} />

<HeroSection
  {title}
  {description}
  primaryCta={{
    text: 'Browse Colors',
    href: 'https://www.shadcn-svelte.com/colors',
    openInNewTab: true
  }}
  secondaryCta={{
    text: 'Documentation',
    href: 'https://www.shadcn-svelte.com/docs/theming',
    openInNewTab: true
  }}
/>
