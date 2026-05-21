export type ComponentLink = {
  title: string;
  href: string;
};

export const headerLinks = [
  {
    title: 'Docs',
    href: '/docs/installation'
  },
  {
    title: 'Components',
    href: '/docs/components'
  },
  {
    title: 'Blocks',
    href: '/blocks'
  },
  {
    title: 'Charts',
    href: '/charts'
  },
  {
    title: 'Colors',
    href: '/colors'
  }
];

export type SidebarNavGroup = {
  title: string;
  links: ComponentLink[];
};

/**
 * Builds the sidebar navigation links given a list of component links.
 * This function is pure — the glob-based component discovery is done
 * server-side in navigation.server.ts.
 */
export function buildSidebarNavLinks(componentLinks: ComponentLink[]): SidebarNavGroup[] {
  return [
    {
      title: 'Sections',
      links: [
        {
          title: 'Get Started',
          href: '/docs'
        },
        {
          title: 'Components',
          href: '/docs/components'
        }
      ]
    },
    {
      title: 'Get Started',
      links: [
        {
          title: 'Installation',
          href: '/docs/installation'
        },
        {
          title: 'Theming',
          href: '/docs/theming'
        },
        {
          title: 'Dark Mode',
          href: '/docs/dark-mode'
        },
        {
          title: 'CLI',
          href: '/docs/cli'
        }
      ]
    },
    {
      title: 'Components',
      links: componentLinks
    }
  ];
}

export function findNeighbors(
  pathName: string,
  navGroups: SidebarNavGroup[]
): {
  previous: ComponentLink | null;
  next: ComponentLink | null;
} {
  const path = pathName.split('?')[0].split('#')[0];

  const allLinks: ComponentLink[] = [];
  const seen = new Set<string>();

  for (const group of navGroups) {
    for (const link of group.links) {
      if (!seen.has(link.href)) {
        seen.add(link.href);
        allLinks.push(link);
      }
    }
  }

  const index = allLinks.findIndex((item) => item.href === path);

  if (index === -1) {
    return { previous: null, next: null };
  }

  const previous = index > 0 ? allLinks[index - 1] : null;
  const next = index < allLinks.length - 1 ? allLinks[index + 1] : null;

  return { previous, next };
}
