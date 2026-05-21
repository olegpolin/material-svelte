<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import HeroSection from '$lib/components/hero-section.svelte';

  const title = 'Beautiful Charts & Graphs';
  const description =
    'A collection of ready-to-use chart components built with LayerChart. From basic charts to rich data displays, copy and paste into your apps.';
</script>

<Seo {title} {description} />

<HeroSection
  {title}
  {description}
  primaryCta={{
    text: 'Browse Charts',
    href: 'https://www.shadcn-svelte.com/charts/area',
    openInNewTab: true
  }}
  secondaryCta={{
    text: 'Documentation',
    href: 'https://www.shadcn-svelte.com/docs/components/chart',
    openInNewTab: true
  }}
/>
