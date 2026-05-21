export const prerender = true;

import type { LayoutServerLoad } from './$types';
import { componentLinks } from '$lib/utils/navigation.server';
import { buildSidebarNavLinks } from '$lib/utils/navigation';

const sidebarNavLinks = buildSidebarNavLinks(componentLinks);

export const load: LayoutServerLoad = () => ({
  componentLinks,
  sidebarNavLinks
});
