<script lang="ts">
  import * as Field from "$lib/registry/ui/field/index.js";
  import { Input } from "$lib/registry/ui/input/index.js";
  import { Switch } from "$lib/registry/ui/switch/index.js";
</script>

<Field.Set>
  <Field.Legend>Profile</Field.Legend>
  <Field.Description>This appears on invoices and emails.</Field.Description>
  <Field.Group>
    <Field.Field>
      <Field.Label for="name">Full name</Field.Label>
      <Input id="name" autocomplete="off" placeholder="Evil Rabbit" />
      <Field.Description>This appears on invoices and emails.</Field.Description
      >
    </Field.Field>
    <Field.Field>
      <Field.Label for="username">Username</Field.Label>
      <Input id="username" autocomplete="off" aria-invalid />
      <Field.Error>Choose another username.</Field.Error>
    </Field.Field>
    <Field.Field orientation="horizontal">
      <Switch id="newsletter" />
      <Field.Label for="newsletter">Subscribe to the newsletter</Field.Label>
    </Field.Field>
  </Field.Group>
</Field.Set>
