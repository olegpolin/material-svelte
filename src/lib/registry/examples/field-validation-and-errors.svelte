<script lang="ts">
  import * as Field from "$lib/registry/ui/field/index.js";
  import { Input } from "$lib/registry/ui/input/index.js";
</script>

<Field.Field data-invalid>
  <Field.Label for="email">Email</Field.Label>
  <Input id="email" type="email" aria-invalid />
  <Field.Error>Enter a valid email address.</Field.Error>
</Field.Field>
