<script lang="ts">
  interface Props {
    title: string;
    description: string;
  }

  let { title, description }: Props = $props();
</script>

<svelte:head>
  <title>{title} - shadcn-svelte registry template</title>
  <meta name="description" content={description} />
</svelte:head>
