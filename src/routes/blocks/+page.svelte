<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import HeroSection from '$lib/components/hero-section.svelte';

  const title = 'Building Blocks for the Web';
  const description =
    'Clean, modern building blocks. Works with all Svelte projects. Copy and paste into your apps. Open Source. Free forever.';
</script>

<Seo {title} {description} />

<HeroSection
  {title}
  {description}
  primaryCta={{
    text: 'Browse Blocks',
    href: 'https://www.shadcn-svelte.com/blocks',
    openInNewTab: true
  }}
  secondaryCta={{
    text: 'View Components',
    href: 'https://www.shadcn-svelte.com/docs/components',
    openInNewTab: true
  }}
/>
