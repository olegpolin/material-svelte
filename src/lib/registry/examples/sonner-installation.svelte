<!-- +layout.svelte -->

<script lang="ts">
  import { Toaster } from "$lib/registry/ui/sonner/index.js";
  let { children } = $props();
</script>
 
<Toaster />
 
{@render children?.()}
