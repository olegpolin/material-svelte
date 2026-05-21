<script lang="ts">
  import * as Empty from "$lib/registry/ui/empty/index.js";
  import { Button } from "$lib/registry/ui/button/index.js";
  import FolderCodeIcon from "@lucide/svelte/icons/folder-code";
</script>

<Empty.Root>
  <Empty.Header>
    <Empty.Media variant="icon">
      <FolderCodeIcon />
    </Empty.Media>
    <Empty.Title>No data</Empty.Title>
    <Empty.Description>No data found</Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <Button>Add data</Button>
  </Empty.Content>
</Empty.Root>
