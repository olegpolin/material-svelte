# material-svelte

A collection of UI components for Svelte with the [Material Design 3 Expressive](https://m3.material.io) style, based on [shadcn-svelte](https://www.shadcn-svelte.com).

Not affiliated with Google or the official Material Design team.

Docs and component previews: **[material-svelte.flenze.com](https://material-svelte.flenze.com)**

[![A showcase of material-svelte components](static/showcase.png)](https://material-svelte.flenze.com)

Built with [shadcn-svelte-registry-template](https://github.com/olegpolin/shadcn-svelte-registry-template).

## Usage

Components are distributed through a shadcn-svelte registry, so you add them to your own SvelteKit app with the shadcn-svelte CLI:

```sh
npx shadcn-svelte@latest add https://material-svelte.flenze.com/r/button.json
```

See the [installation guide](https://material-svelte.flenze.com/docs/installation) for the full setup (theme and fonts), and each component's docs page for its add command.

## Developing

This section is for working on the library itself.

Install dependencies with `npm install`, then start the docs site:

```sh
npm run dev
```

To build the registry JSON files in `static/r` from `registry.json`:

```sh
npm run registry:build
```

## Building

To create a production version of the docs site:

```sh
npm run build
```

This also runs the registry build script.

You can preview the production build with `npm run preview`.
