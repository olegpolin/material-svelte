<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import HeroSection from '$lib/components/hero-section.svelte';
  import RootComponents from '$lib/components/root-components.svelte';

  const title = 'The Foundation for your Design System';
  const description =
    'A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.';
</script>

<Seo {title} {description} />

<HeroSection
  {title}
  {description}
  primaryCta={{
    text: 'Get Started',
    href: '/docs/installation'
  }}
  secondaryCta={{
    text: 'View Components',
    href: '/docs/components'
  }}
/>

<div class="3xl:max-w-screen-2xl mx-auto max-w-350 px-4 pb-6 lg:px-8">
  <RootComponents />
</div>
