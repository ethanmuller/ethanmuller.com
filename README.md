# ethanmuller.com

The codebase for my personal website. It is built with sveltekit.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

## Deploying

To deploy the app, ssh into the chicago VPS and:

```bash
 cd ~/git/ethanmuller.com/ && git pull && npm run build
```

nginx will serve it from there
