# [material-svelte](https://material-svelte.flenze.com)

A collection of UI components for Svelte with the [Material Design 3 Expressive](https://m3.material.io) style, based on [shadcn-svelte](https://www.shadcn-svelte.com).

Not affiliated with Google or the official Material Design team.

To use the components in your SvelteKit app, initialize shadcn-svelte, copy the `:root`, `.dark`, and `@theme inline` styles from `src/routes/layout.css` to your app's `layout.css`. Then, run the corresponding `npx shadcn-svelte add` commands from each component's docs page for the components you want to use.

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To build your registry, run the build registry script:

```sh
npm run registry:build
```

This will generate the registry JSON files in `static/r`, using your `registry.json` file.

## Building

To create a production version of your app:

```sh
npm run build
```

This also runs the build registry script.

You can preview the production build with `npm run preview`.
