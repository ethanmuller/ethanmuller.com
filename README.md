# ethanmuller.com

The codebase for my personal website. It is built with sveltekit.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deploying

First you'll need to commit and push your work to github:

```bash
git add .
git commit -m "do stuff"
git push
```

Then to deploy the app, log into the Chicago VPS via ssh:

```bash
 cd ~/git/ethanmuller.com/ && git pull && npm run build
```

nginx will serve it from there
