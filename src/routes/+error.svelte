<script lang="ts">
  import { page } from '$app/state';
  import * as Empty from '#lib/registry/ui/empty/index.js';
  import { Button } from '#lib/registry/ui/button/index.js';
</script>

<Empty.Root>
  <Empty.Header>
    <Empty.Title class="text-4xl">{page.status} - {page.error?.message}</Empty.Title>
  </Empty.Header>
  <Empty.Content>
    <Button href="/">Go Home</Button>
  </Empty.Content>
</Empty.Root>
