<script lang="ts">
  // --- Icons ---
  import MinusIcon from "@lucide/svelte/icons/minus";
  import PlusIcon from "@lucide/svelte/icons/plus";
  import AudioLines from "@lucide/svelte/icons/audio-lines";
  import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import ArrowLeft from "@lucide/svelte/icons/arrow-left";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import AtIcon from "@lucide/svelte/icons/at-sign";
  import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
  import AppsIcon from "@lucide/svelte/icons/grid-3x3";
  import BookIcon from "@lucide/svelte/icons/book";
  import CirclePlusIcon from "@lucide/svelte/icons/circle-plus";
  import PaperclipIcon from "@lucide/svelte/icons/paperclip";
  import GlobeIcon from "@lucide/svelte/icons/globe";
  import XIcon from "@lucide/svelte/icons/x";
  import Archive from "@lucide/svelte/icons/archive";
  import CalendarPlus from "@lucide/svelte/icons/calendar-plus";
  import Clock from "@lucide/svelte/icons/clock";
  import ListFilter from "@lucide/svelte/icons/list-filter";
  import MailCheck from "@lucide/svelte/icons/mail-check";
  import MoreHorizontal from "@lucide/svelte/icons/more-horizontal";
  import Tag from "@lucide/svelte/icons/tag";
  import Trash2 from "@lucide/svelte/icons/trash-2";
  import Bot from "@lucide/svelte/icons/bot";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import SearchIcon from "@lucide/svelte/icons/search";
  import InfoIcon from "@lucide/svelte/icons/info";
  import IconStar from "@lucide/svelte/icons/star";
  import IconCheck from "@lucide/svelte/icons/check";
  import IconPlus from "@lucide/svelte/icons/plus";

  // --- UI Components ---
  import { Button } from "$lib/registry/ui/button/index.js";
  import * as ButtonGroup from "$lib/registry/ui/button-group/index.js";
  import * as Field from "$lib/registry/ui/field/index.js";
  import { Input } from "$lib/registry/ui/input/index.js";
  import * as RadioGroup from "$lib/registry/ui/radio-group/index.js";
  import { Switch } from "$lib/registry/ui/switch/index.js";
  import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
  import { Card, CardContent } from "$lib/registry/ui/card/index.js";
  import * as InputGroup from "$lib/registry/ui/input-group/index.js";
  import { Label } from "$lib/registry/ui/label/index.js";
  import * as Popover from "$lib/registry/ui/popover/index.js";
  import * as Item from "$lib/registry/ui/item/index.js";
  import * as Avatar from "$lib/registry/ui/avatar/index.js";
  import { Badge } from "$lib/registry/ui/badge/index.js";
  import * as Command from "$lib/registry/ui/command/index.js";
  import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
  import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
  import { Spinner } from "$lib/registry/ui/spinner/index.js";
  import { Slider } from "$lib/registry/ui/slider/index.js";
  import { Separator } from "$lib/registry/ui/separator/index.js";
  import * as Select from "$lib/registry/ui/select/index.js";
  import { Textarea } from "$lib/registry/ui/textarea/index.js";
  import * as Empty from "$lib/registry/ui/empty/index.js";

  // --- field-demo state ---
  let month = $state<string>();
  let year = $state<string>();

  // --- field-slider-demo state ---
  let sliderValue = $state([200, 800]);

  // --- appearance-settings state ---
  let gpuCount = $state(8);

  function handleGpuCountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    let inputValue = target.value;
    const previousValue = gpuCount.toString();
    let cleanedValue = inputValue.replace(/[^0-9]/g, "");
    if (cleanedValue === "" && previousValue.length === 1) {
      target.value = previousValue;
      return;
    }
    if (cleanedValue !== "") {
      const numValue = parseInt(cleanedValue, 10);
      if (
        previousValue.length === 2 &&
        cleanedValue !== previousValue &&
        cleanedValue.length === 3
      ) {
        target.value = previousValue;
        return;
      }
      if (numValue < 1) {
        cleanedValue = "1";
      } else if (numValue > 99) {
        cleanedValue = "99";
      }
      target.value = cleanedValue;
      gpuCount = parseInt(cleanedValue, 10);
    }
  }

  // --- input-group-button-demo state ---
  let isFavorite = $state(false);

  // --- button-group-input-group-demo state ---
  let voiceEnabled = $state(false);

  // --- button-group-demo state ---
  let emailLabel = $state("personal");

  // --- field-hear options ---
  const hearOptions = [
    { label: "Social Media", value: "social-media" },
    { label: "Search Engine", value: "search-engine" },
    { label: "Referral", value: "referral" },
    { label: "Other", value: "other" },
  ];

  // --- notion-prompt-form state ---
  const SAMPLE_DATA = {
    mentionable: [
      { type: "page", title: "Meeting Notes", image: "📝" },
      { type: "page", title: "Project Dashboard", image: "📊" },
      { type: "page", title: "Ideas & Brainstorming", image: "💡" },
      { type: "page", title: "Calendar & Events", image: "📅" },
      { type: "page", title: "Documentation", image: "📚" },
      { type: "page", title: "Goals & Objectives", image: "🎯" },
      { type: "page", title: "Budget Planning", image: "💰" },
      { type: "page", title: "Team Directory", image: "👥" },
      { type: "page", title: "Technical Specs", image: "🔧" },
      { type: "page", title: "Analytics Report", image: "📈" },
      { type: "user", title: "shadcn", image: "https://github.com/shadcn.png", workspace: "Workspace" },
      { type: "user", title: "maxleiter", image: "https://github.com/maxleiter.png", workspace: "Workspace" },
      { type: "user", title: "evilrabbit", image: "https://github.com/evilrabbit.png", workspace: "Workspace" },
    ],
    models: [
      { name: "Auto" },
      { name: "Agent Mode", badge: "Beta" },
      { name: "Plan Mode" },
    ],
  };

  let mentions = $state<string[]>([]);
  let mentionPopoverOpen = $state(false);
  let modelPopoverOpen = $state(false);
  let selectedModel = $state(SAMPLE_DATA.models[0]);
  let scopeMenuOpen = $state(false);

  const grouped = $derived.by(() => {
    return SAMPLE_DATA.mentionable.reduce(
      (acc, item) => {
        const isAvailable = !mentions.includes(item.title);
        if (isAvailable) {
          if (!acc[item.type]) acc[item.type] = [];
          acc[item.type].push(item);
        }
        return acc;
      },
      {} as Record<string, typeof SAMPLE_DATA.mentionable>
    );
  });

  const hasMentions = $derived(mentions.length > 0);
</script>

{#snippet MentionableIcon({ item }: { item: (typeof SAMPLE_DATA.mentionable)[0] })}
  {#if item.type === "page"}
    <span class="flex size-4 items-center justify-center">{item.image}</span>
  {:else}
    <Avatar.Root class="size-4">
      <Avatar.Image src={item.image} />
      <Avatar.Fallback>{item.title[0]}</Avatar.Fallback>
    </Avatar.Root>
  {/if}
{/snippet}

<div
  class="mx-auto grid gap-8 py-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 2xl:gap-8"
>
  <!-- Column 1: FieldDemo (payment form) -->
  <div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
    <div class="border-border rounded-lg border p-6">
      <div class="w-full max-w-md">
        <form>
          <Field.Group>
            <Field.Set>
              <Field.Legend>Payment Method</Field.Legend>
              <Field.Description>All transactions are secure and encrypted</Field.Description>
              <Field.Group>
                <Field.Field>
                  <Field.Label for="card-name">Name on Card</Field.Label>
                  <Input id="card-name" placeholder="John Doe" required />
                </Field.Field>
                <div class="grid grid-cols-3 gap-4">
                  <Field.Field class="col-span-2">
                    <Field.Label for="card-number">Card Number</Field.Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                    <Field.Description>Enter your 16-digit number.</Field.Description>
                  </Field.Field>
                  <Field.Field class="col-span-1">
                    <Field.Label for="cvv">CVV</Field.Label>
                    <Input id="cvv" placeholder="123" required />
                  </Field.Field>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <Field.Field>
                    <Field.Label for="exp-month">Month</Field.Label>
                    <Select.Root type="single" bind:value={month}>
                      <Select.Trigger id="exp-month">
                        <span>{month || "MM"}</span>
                      </Select.Trigger>
                      <Select.Content>
                        {#each ["01","02","03","04","05","06","07","08","09","10","11","12"] as m (m)}
                          <Select.Item value={m}>{m}</Select.Item>
                        {/each}
                      </Select.Content>
                    </Select.Root>
                  </Field.Field>
                  <Field.Field>
                    <Field.Label for="exp-year">Year</Field.Label>
                    <Select.Root type="single" bind:value={year}>
                      <Select.Trigger id="exp-year">
                        <span>{year || "YYYY"}</span>
                      </Select.Trigger>
                      <Select.Content>
                        {#each ["2024","2025","2026","2027","2028","2029"] as y (y)}
                          <Select.Item value={y}>{y}</Select.Item>
                        {/each}
                      </Select.Content>
                    </Select.Root>
                  </Field.Field>
                </div>
              </Field.Group>
            </Field.Set>
            <Field.Separator />
            <Field.Set>
              <Field.Legend>Billing Address</Field.Legend>
              <Field.Description>The billing address associated with your payment method</Field.Description>
              <Field.Group>
                <Field.Field orientation="horizontal">
                  <Checkbox id="same-as-shipping" checked={true} />
                  <Field.Label for="same-as-shipping" class="font-normal">
                    Same as shipping address
                  </Field.Label>
                </Field.Field>
              </Field.Group>
            </Field.Set>
            <Field.Separator />
            <Field.Set>
              <Field.Group>
                <Field.Field>
                  <Field.Label for="comments">Comments</Field.Label>
                  <Textarea id="comments" placeholder="Add any additional comments" class="resize-none" />
                </Field.Field>
              </Field.Group>
            </Field.Set>
            <Field.Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">Cancel</Button>
            </Field.Field>
          </Field.Group>
        </form>
      </div>
    </div>
  </div>

  <!-- Column 2: EmptyAvatarGroupDemo, SpinnerBadgeDemo, ButtonGroupInputGroupDemo, FieldSliderDemo, InputGroupDemo -->
  <div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
    <!-- EmptyAvatarGroupDemo -->
    <Empty.Root class="flex-none border">
      <Empty.Header>
        <Empty.Media>
          <Avatar.Group class="grayscale">
            <Avatar.Root>
              <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Image src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar.Root>
          </Avatar.Group>
        </Empty.Media>
        <Empty.Title>No Team Members</Empty.Title>
        <Empty.Description>Invite your team to collaborate on this project.</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </Empty.Content>
    </Empty.Root>

    <!-- SpinnerBadgeDemo -->
    <div class="flex items-center gap-2">
      <Badge><Spinner />Syncing</Badge>
      <Badge variant="secondary"><Spinner />Updating</Badge>
      <Badge variant="outline"><Spinner />Loading</Badge>
    </div>

    <!-- ButtonGroupInputGroupDemo -->
    <ButtonGroup.Root class="[--radius:9999rem]">
      <ButtonGroup.Root>
        <Button variant="outline" size="icon" aria-label="Add">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root class="flex-1">
        <InputGroup.Root>
          <InputGroup.Input
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
            disabled={voiceEnabled}
          />
          <InputGroup.Addon align="inline-end">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <InputGroup.Button
                    {...props}
                    onclick={() => (voiceEnabled = !voiceEnabled)}
                    size="icon-xs"
                    data-active={voiceEnabled}
                    class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                    aria-pressed={voiceEnabled}
                    aria-label="Toggle voice mode"
                  >
                    <AudioLines />
                  </InputGroup.Button>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content>Voice Mode</Tooltip.Content>
            </Tooltip.Root>
          </InputGroup.Addon>
        </InputGroup.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>

    <!-- FieldSliderDemo -->
    <div class="w-full max-w-md">
      <Field.Field>
        <Field.Label>Price Range</Field.Label>
        <Field.Description>
          Set your budget range ($<span class="font-medium tabular-nums">{sliderValue[0]}</span> -
          <span class="font-medium tabular-nums">{sliderValue[1]}</span>).
        </Field.Description>
        <Slider
          type="multiple"
          bind:value={sliderValue}
          max={1000}
          min={0}
          step={10}
          class="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field.Field>
    </div>

    <!-- InputGroupDemo -->
    <div class="grid w-full max-w-sm gap-6">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="example.com" class="!ps-1" />
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <Tooltip.Root>
            <Tooltip.Trigger>
              {#snippet child({ props })}
                <InputGroup.Button {...props} class="rounded-full" size="icon-xs" aria-label="Info">
                  <InfoIcon />
                </InputGroup.Button>
              {/snippet}
            </Tooltip.Trigger>
            <Tooltip.Content>This is content in a tooltip.</Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Ask, Search or Chat..." />
        <InputGroup.Addon align="block-end">
          <InputGroup.Button variant="outline" class="rounded-full" size="icon-xs" aria-label="Add attachment">
            <IconPlus />
          </InputGroup.Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              {#snippet child({ props })}
                <InputGroup.Button {...props} variant="ghost">Auto</InputGroup.Button>
              {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="top" align="start" class="[--radius:0.95rem]">
              <DropdownMenu.Item>Auto</DropdownMenu.Item>
              <DropdownMenu.Item>Agent</DropdownMenu.Item>
              <DropdownMenu.Item>Manual</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <InputGroup.Text class="ms-auto">52% used</InputGroup.Text>
          <Separator orientation="vertical" class="!h-4" />
          <InputGroup.Button variant="default" class="rounded-full" size="icon-xs">
            <ArrowUpIcon />
            <span class="sr-only">Send</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="@shadcn" />
        <InputGroup.Addon align="inline-end">
          <div class="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
            <IconCheck class="size-3" />
          </div>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  </div>

  <!-- Column 3: InputGroupButtonDemo, ItemDemo, FieldSeparator, AppearanceSettings -->
  <div class="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
    <!-- InputGroupButtonDemo -->
    <div class="grid w-full max-w-sm gap-6">
      <Label for="input-secure" class="sr-only">Input Secure</Label>
      <InputGroup.Root class="[--radius:9999px]">
        <InputGroup.Input id="input-secure" class="!ps-0.5" />
        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <InputGroup.Addon>
                <InputGroup.Button
                  {...props}
                  variant="secondary"
                  size="icon-xs"
                  aria-label="Info"
                >
                  <InfoIcon />
                </InputGroup.Button>
              </InputGroup.Addon>
            {/snippet}
          </Popover.Trigger>
          <Popover.Content align="start" alignOffset={10} class="flex flex-col gap-1 rounded-xl text-sm">
            <p class="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Popover.Content>
        </Popover.Root>
        <InputGroup.Addon class="text-muted-foreground !ps-1">https://</InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            onclick={() => (isFavorite = !isFavorite)}
            size="icon-xs"
            aria-label="Favorite"
          >
            <IconStar
              data-favorite={isFavorite}
              class="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
            />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>

    <!-- ItemDemo -->
    <div class="flex w-full max-w-md flex-col gap-6">
      <Item.Root variant="outline">
        <Item.Content>
          <Item.Title>Two-factor authentication</Item.Title>
          <Item.Description class="text-pretty xl:hidden 2xl:block">
            Verify via email or phone number.
          </Item.Description>
        </Item.Content>
        <Item.Actions>
          <Button size="sm">Enable</Button>
        </Item.Actions>
      </Item.Root>
      <Item.Root variant="outline" size="sm">
        {#snippet child({ props })}
          <a href="#/" {...props}>
            <Item.Media>
              <BadgeCheckIcon class="size-5" />
            </Item.Media>
            <Item.Content>
              <Item.Title>Your profile has been verified.</Item.Title>
            </Item.Content>
            <Item.Actions>
              <ChevronRightIcon class="size-4" />
            </Item.Actions>
          </a>
        {/snippet}
      </Item.Root>
    </div>

    <!-- FieldSeparator -->
    <Field.Separator class="my-4">Appearance Settings</Field.Separator>

    <!-- AppearanceSettings -->
    <Field.Set>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Compute Environment</Field.Legend>
          <Field.Description>Select the compute environment for your cluster.</Field.Description>
          <RadioGroup.Root value="kubernetes">
            <Field.Label for="kubernetes-r2h">
              <Field.Field orientation="horizontal">
                <Field.Content>
                  <Field.Title>Kubernetes</Field.Title>
                  <Field.Description>
                    Run GPU workloads on a K8s configured cluster. This is the default.
                  </Field.Description>
                </Field.Content>
                <RadioGroup.Item value="kubernetes" id="kubernetes-r2h" aria-label="Kubernetes" />
              </Field.Field>
            </Field.Label>
            <Field.Label for="vm-z4k">
              <Field.Field orientation="horizontal">
                <Field.Content>
                  <Field.Title>Virtual Machine</Field.Title>
                  <Field.Description>
                    Access a VM configured cluster to run workloads. (Coming soon)
                  </Field.Description>
                </Field.Content>
                <RadioGroup.Item value="vm" id="vm-z4k" aria-label="Virtual Machine" />
              </Field.Field>
            </Field.Label>
          </RadioGroup.Root>
        </Field.Set>
        <Field.Separator />
        <Field.Field orientation="horizontal">
          <Field.Content>
            <Field.Label for="number-of-gpus">Number of GPUs</Field.Label>
            <Field.Description>You can add more later.</Field.Description>
          </Field.Content>
          <ButtonGroup.Root>
            <Input
              id="number-of-gpus"
              bind:value={gpuCount}
              size={3}
              class="font-mono h-8"
              maxlength={3}
              oninput={handleGpuCountChange}
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
            />
            <Button
              onclick={() => gpuCount--}
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="Decrement"
              disabled={gpuCount <= 1}
            >
              <MinusIcon />
            </Button>
            <Button
              onclick={() => gpuCount++}
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="Increment"
              disabled={gpuCount >= 99}
            >
              <PlusIcon />
            </Button>
          </ButtonGroup.Root>
        </Field.Field>
        <Field.Separator />
        <Field.Field orientation="horizontal">
          <Field.Content>
            <Field.Label for="tinting">Wallpaper Tinting</Field.Label>
            <Field.Description>Allow the wallpaper to be tinted.</Field.Description>
          </Field.Content>
          <Switch id="tinting" checked />
        </Field.Field>
      </Field.Group>
    </Field.Set>
  </div>

  <!-- Column 4 (xl only): NotionPromptForm, ButtonGroupDemo, FieldCheckbox, Nested+ButtonGroupPopoverDemo, FieldHear, SpinnerEmptyDemo -->
  <div
    class="order-first flex flex-col gap-6 lg:hidden xl:order-last xl:flex *:[div]:w-full *:[div]:max-w-full"
  >
    <!-- NotionPromptForm -->
    <form class="[--radius:1.2rem]">
      <Field.Group>
        <Field.Label for="notion-prompt" class="sr-only">Prompt</Field.Label>
        <InputGroup.Root>
          <InputGroup.Textarea id="notion-prompt" placeholder="Ask, search, or make anything..." />
          <InputGroup.Addon align="block-start">
            <Popover.Root bind:open={mentionPopoverOpen}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  {#snippet child({ props })}
                    <Popover.Trigger {...props}>
                      {#snippet child({ props })}
                        <InputGroup.Button
                          {...props}
                          variant="outline"
                          size={!hasMentions ? "sm" : "icon-sm"}
                          class="rounded-full transition-transform"
                          aria-label={hasMentions ? "Add context" : undefined}
                        >
                          <AtIcon />
                          {#if !hasMentions}
                            Add context
                          {/if}
                        </InputGroup.Button>
                      {/snippet}
                    </Popover.Trigger>
                  {/snippet}
                </Tooltip.Trigger>
                <Tooltip.Content>Mention a person, page, or date</Tooltip.Content>
              </Tooltip.Root>
              <Popover.Content class="p-0 [--radius:1.2rem]" align="start">
                <Command.Root>
                  <Command.Input placeholder="Search pages..." />
                  <Command.List>
                    <Command.Empty>No pages found</Command.Empty>
                    {#each Object.entries(grouped) as [type, items] (type)}
                      <Command.Group heading={type === "page" ? "Pages" : "Users"}>
                        {#each items as item (item.title)}
                          <Command.Item
                            value={item.title}
                            onSelect={() => {
                              mentions = [...mentions, item.title];
                              mentionPopoverOpen = false;
                            }}
                          >
                            {@render MentionableIcon({ item })}
                            {item.title}
                          </Command.Item>
                        {/each}
                      </Command.Group>
                    {/each}
                  </Command.List>
                </Command.Root>
              </Popover.Content>
            </Popover.Root>
            <div class="no-scrollbar -m-1.5 flex gap-1 overflow-y-auto p-1.5">
              {#each mentions as mention (mention)}
                {@const item = SAMPLE_DATA.mentionable.find((m) => m.title === mention)}
                {#if item}
                  <InputGroup.Button
                    size="sm"
                    variant="secondary"
                    class="rounded-full !ps-2"
                    onclick={() => {
                      mentions = mentions.filter((m) => m !== mention);
                    }}
                  >
                    {@render MentionableIcon({ item })}
                    {item.title}
                    <XIcon />
                  </InputGroup.Button>
                {/if}
              {/each}
            </div>
          </InputGroup.Addon>
          <InputGroup.Addon align="block-end" class="gap-1">
            <Tooltip.Root>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <InputGroup.Button
                    {...props}
                    size="icon-sm"
                    class="rounded-full"
                    aria-label="Attach file"
                  >
                    <PaperclipIcon />
                  </InputGroup.Button>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content>Attach file</Tooltip.Content>
            </Tooltip.Root>
            <DropdownMenu.Root bind:open={modelPopoverOpen}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  {#snippet child({ props })}
                    <DropdownMenu.Trigger {...props}>
                      {#snippet child({ props })}
                        <InputGroup.Button {...props} size="sm" class="rounded-full">
                          {selectedModel.name}
                        </InputGroup.Button>
                      {/snippet}
                    </DropdownMenu.Trigger>
                  {/snippet}
                </Tooltip.Trigger>
                <Tooltip.Content>Select AI model</Tooltip.Content>
              </Tooltip.Root>
              <DropdownMenu.Content side="top" align="start" class="[--radius:1rem]">
                <DropdownMenu.Group class="w-42">
                  <DropdownMenu.Label class="text-muted-foreground text-xs">
                    Select Agent Mode
                  </DropdownMenu.Label>
                  {#each SAMPLE_DATA.models as model (model.name)}
                    <DropdownMenu.CheckboxItem
                      checked={model.name === selectedModel.name}
                      onCheckedChange={(checked) => {
                        if (checked) selectedModel = model;
                      }}
                      class="ps-2 *:[span:first-child]:start-auto *:[span:first-child]:end-2"
                    >
                      {model.name}
                      {#if model.badge}
                        <Badge
                          variant="secondary"
                          class="h-5 rounded-sm bg-blue-100 px-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
                          {model.badge}
                        </Badge>
                      {/if}
                    </DropdownMenu.CheckboxItem>
                  {/each}
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root bind:open={scopeMenuOpen}>
              <DropdownMenu.Trigger>
                {#snippet child({ props })}
                  <InputGroup.Button {...props} size="sm" class="rounded-full">
                    <GlobeIcon /> All Sources
                  </InputGroup.Button>
                {/snippet}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="top" align="end" class="[--radius:1rem]">
                <DropdownMenu.Group>
                  <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
                    {#snippet child({ props })}
                      <label for="web-search" {...props}>
                        <GlobeIcon /> Web Search
                        <Switch id="web-search" class="ms-auto" checked />
                      </label>
                    {/snippet}
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
                    {#snippet child({ props })}
                      <label for="apps" {...props}>
                        <AppsIcon /> Apps and Integrations
                        <Switch id="apps" class="ms-auto" checked />
                      </label>
                    {/snippet}
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <CirclePlusIcon /> All Sources I can access
                  </DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>
                      <Avatar.Root class="size-4">
                        <Avatar.Image src="https://github.com/shadcn.png" />
                        <Avatar.Fallback>CN</Avatar.Fallback>
                      </Avatar.Root>
                      shadcn
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent class="w-72 p-0 [--radius:1rem]">
                      <Command.Root>
                        <Command.Input placeholder="Find or use knowledge in..." autofocus />
                        <Command.List>
                          <Command.Empty>No knowledge found</Command.Empty>
                          <Command.Group>
                            {#each SAMPLE_DATA.mentionable.filter((item) => item.type === "user") as user (user.title)}
                              <Command.Item
                                value={user.title}
                                onSelect={() => console.log("Selected user:", user.title)}
                              >
                                <Avatar.Root class="size-4">
                                  <Avatar.Image src={user.image} />
                                  <Avatar.Fallback>{user.title[0]}</Avatar.Fallback>
                                </Avatar.Root>
                                {user.title}
                                <span class="text-muted-foreground">- {user.workspace}</span>
                              </Command.Item>
                            {/each}
                          </Command.Group>
                        </Command.List>
                      </Command.Root>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>
                  <DropdownMenu.Item>
                    <BookIcon /> Help Center
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <PlusIcon /> Connect Apps
                  </DropdownMenu.Item>
                  <DropdownMenu.Label class="text-muted-foreground text-xs">
                    We'll only search in the sources selected here.
                  </DropdownMenu.Label>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <InputGroup.Button
              aria-label="Send"
              class="ms-auto rounded-full"
              variant="default"
              size="icon-sm"
            >
              <ArrowUpIcon />
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup.Root>
      </Field.Group>
    </form>

    <!-- ButtonGroupDemo (email toolbar) -->
    <ButtonGroup.Root>
      <ButtonGroup.Root class="hidden sm:flex">
        <Button variant="outline" size="icon-sm" aria-label="Go Back">
          <ArrowLeft />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="sm" variant="outline">Archive</Button>
        <Button size="sm" variant="outline">Report</Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="sm" variant="outline">Snooze</Button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="outline" size="icon-sm" aria-label="More Options">
                <MoreHorizontal />
              </Button>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" class="w-52">
            <DropdownMenu.Group>
              <DropdownMenu.Item><MailCheck />Mark as Read</DropdownMenu.Item>
              <DropdownMenu.Item><Archive />Archive</DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item><Clock />Snooze</DropdownMenu.Item>
              <DropdownMenu.Item><CalendarPlus />Add to Calendar</DropdownMenu.Item>
              <DropdownMenu.Item><ListFilter />Add to List</DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger><Tag />Label As...</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.RadioGroup bind:value={emailLabel}>
                    <DropdownMenu.RadioItem value="personal">Personal</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="work">Work</DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="other">Other</DropdownMenu.RadioItem>
                  </DropdownMenu.RadioGroup>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item class="text-destructive focus:text-destructive">
                <Trash2 />Trash
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>

    <!-- FieldCheckbox -->
    <Field.Label for="checkbox-demo">
      <Field.Field orientation="horizontal">
        <Checkbox id="checkbox-demo" checked />
        <Field.Label for="checkbox-demo" class="line-clamp-1">
          I agree to the terms and conditions
        </Field.Label>
      </Field.Field>
    </Field.Label>

    <!-- Nested (pagination) + ButtonGroupPopoverDemo -->
    <div class="flex justify-between gap-4">
      <!-- Nested -->
      <ButtonGroup.Root>
        <ButtonGroup.Root>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
        </ButtonGroup.Root>
        <ButtonGroup.Root>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeft />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRight />
          </Button>
        </ButtonGroup.Root>
      </ButtonGroup.Root>

      <!-- ButtonGroupPopoverDemo -->
      <ButtonGroup.Root>
        <Button variant="outline" size="sm">
          <Bot />
          Copilot
        </Button>
        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="outline" size="icon-sm" aria-label="Open Popover">
                <ChevronDown />
              </Button>
            {/snippet}
          </Popover.Trigger>
          <Popover.Content align="end" class="rounded-xl p-0 text-sm">
            <div class="px-4 py-3">
              <div class="text-sm font-medium">Agent Tasks</div>
            </div>
            <Separator />
            <div class="p-4 text-sm *:[p:not(:last-child)]:mb-2">
              <Textarea placeholder="Describe your task in natural language." class="mb-4 resize-none" />
              <p class="font-medium">Start a new task with Copilot</p>
              <p class="text-muted-foreground">
                Describe your task in natural language. Copilot will work in the background and
                open a pull request for your review.
              </p>
            </div>
          </Popover.Content>
        </Popover.Root>
      </ButtonGroup.Root>
    </div>

    <!-- FieldHear -->
    <Card class="py-4 shadow-none">
      <CardContent class="px-4">
        <form>
          <Field.Group>
            <Field.Set class="gap-4">
              <Field.Legend>How did you hear about us?</Field.Legend>
              <Field.Description class="line-clamp-1">
                Select the option that best describes how you heard about us.
              </Field.Description>
              <Field.Group class="flex flex-row flex-wrap gap-2 [--radius:9999rem]">
                {#each hearOptions as option (option.value)}
                  <Field.Label for={option.value} class="!w-fit">
                    <Field.Field
                      orientation="horizontal"
                      class="gap-2.5 overflow-hidden !px-3 !py-1.5 transition-all duration-100 ease-linear group-has-data-[state=checked]/field-label:!px-2"
                    >
                      <Checkbox
                        value={option.value}
                        id={option.value}
                        checked={option.value === "social-media"}
                        class="-ms-7 -translate-x-1 rounded-full transition-all duration-100 ease-linear data-[state=checked]:ms-0 data-[state=checked]:translate-x-0"
                        aria-label={option.label}
                      />
                      <Field.Title class="text-nowrap">{option.label}</Field.Title>
                    </Field.Field>
                  </Field.Label>
                {/each}
              </Field.Group>
            </Field.Set>
          </Field.Group>
        </form>
      </CardContent>
    </Card>

    <!-- SpinnerEmptyDemo -->
    <Empty.Root class="w-full border md:p-6">
      <Empty.Header>
        <Empty.Media variant="icon">
          <Spinner />
        </Empty.Media>
        <Empty.Title>Processing your request</Empty.Title>
        <Empty.Description>
          Please wait while we process your request. Do not refresh the page.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button variant="outline" size="sm">Cancel</Button>
      </Empty.Content>
    </Empty.Root>
  </div>
</div>
