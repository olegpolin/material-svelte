<script lang="ts">
  interface Props {
    title: string;
    description: string;
  }

  let { title, description }: Props = $props();
</script>

<svelte:head>
  <title>{title} - material-svelte</title>
  <meta name="description" content={description} />
</svelte:head>
