<script lang="ts">
  import * as Sidebar from "$lib/registry/ui/sidebar/index.js";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <Sidebar.Root>
    <Sidebar.Header />
    <Sidebar.Content>
      <Sidebar.Group />
      <Sidebar.Group />
    </Sidebar.Content>
    <Sidebar.Footer />
  </Sidebar.Root>
  <main>
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
