<script lang="ts">
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/registry/ui/button/index.js";
</script>

<Button onclick={() => toast("Hello world")}>Show toast</Button>
