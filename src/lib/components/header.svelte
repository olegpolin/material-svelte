<script lang="ts">
  import * as NavigationMenu from '$lib/registry/ui/navigation-menu';
  import * as DropdownMenu from '$lib/registry/ui/dropdown-menu';
  import * as Popover from '$lib/registry/ui/popover';
  import { Button, buttonVariants } from '$lib/registry/ui/button';
  import { Separator } from '$lib/registry/ui/separator';
  import { userPrefersMode } from 'mode-watcher';
  import { headerLinks, type SidebarNavGroup } from '$lib/utils/navigation';
  import CommandMenu from '$lib/components/command-menu.svelte';
  import { githubRepoUrl } from '$lib/constants';
  import Logo from '$lib/assets/logo.svelte';
  import GitHubIcon from '$lib/assets/icons/github-icon.svelte';
  import ModeSwitcherIcon from '$lib/assets/icons/mode-switcher-icon.svelte';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';

  let { sidebarNavLinks }: { sidebarNavLinks: SidebarNavGroup[] } = $props();

  const mobileNavLinks = $derived([
    {
      title: 'Menu',
      links: [
        {
          title: 'Home',
          href: '/'
        },
        ...headerLinks
      ]
    },
    ...sidebarNavLinks
  ]);

  let mobileMenuOpen = $state(false);
</script>

{#snippet mobileLink({ title, href }: { title: string; href: string })}
  <a class="text-2xl font-medium active:opacity-60" {href} onclick={() => (mobileMenuOpen = false)}>
    {title}
  </a>
{/snippet}

<header
  class="sticky top-0 z-50 flex h-14 flex-row items-center justify-between gap-8 bg-background px-6 py-3"
>
  <Popover.Root bind:open={mobileMenuOpen}>
    <Popover.Trigger class={['gap-2.5! p-0! lg:hidden', buttonVariants({ variant: 'ghost' })]}>
      <div class="flex h-8 flex-row items-center">
        <div class="relative size-4">
          <span
            class={[
              'absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
              mobileMenuOpen ? 'top-[0.4rem] -rotate-45' : 'top-1'
            ]}
          ></span>
          <span
            class={[
              'absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
              mobileMenuOpen ? 'top-[0.4rem] rotate-45' : 'top-2.5'
            ]}
          ></span>
        </div>
        <span class="sr-only">Toggle Menu</span>
      </div>
      <span class="flex items-center text-lg font-medium">Menu</span>
    </Popover.Trigger>
    <Popover.Content
      class="no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur"
      align="start"
      side="bottom"
      preventScroll
    >
      <div class="flex flex-col gap-8 overflow-auto p-6">
        {#each mobileNavLinks as navGroup (navGroup.title)}
          <div class="flex flex-col gap-4">
            <span class="text-sm font-medium text-muted-foreground">{navGroup.title}</span>
            <div class="flex flex-col gap-3">
              {#each navGroup.links as navGroupLink}
                {@render mobileLink({ title: navGroupLink.title, href: navGroupLink.href })}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </Popover.Content>
  </Popover.Root>

  <NavigationMenu.Root class="max-lg:hidden">
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link>
          {#snippet child()}
            <Button variant="ghost" size="icon-sm" href="/" aria-label="Home">
              <Logo />
            </Button>
          {/snippet}
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      {#each headerLinks as headerLink}
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            {#snippet child()}
              <Button variant="ghost" size="sm" href={headerLink.href}>{headerLink.title}</Button>
            {/snippet}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      {/each}
    </NavigationMenu.List>
  </NavigationMenu.Root>

  <div class="flex flex-row items-center gap-4">
    <div class="hidden md:flex md:w-auto md:flex-none">
      <CommandMenu />
    </div>
    <Separator class="h-4" orientation="vertical" />
    <Button
      variant="ghost"
      size="icon-sm"
      href={githubRepoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub repository"
    >
      <GitHubIcon />
    </Button>
    <Separator class="h-4" orientation="vertical" />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}>
        <ModeSwitcherIcon />
        <span class="sr-only">Toggle theme</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.RadioGroup bind:value={userPrefersMode.current}>
          <DropdownMenu.RadioItem value="light">
            Light
            <DropdownMenu.Shortcut>
              <SunIcon />
            </DropdownMenu.Shortcut>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark">
            Dark
            <DropdownMenu.Shortcut>
              <MoonIcon />
            </DropdownMenu.Shortcut>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">
            System
            <DropdownMenu.Shortcut>
              <MonitorIcon />
            </DropdownMenu.Shortcut>
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</header>
