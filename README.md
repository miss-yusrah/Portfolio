# Yusrah Mohammed Portfolio

Personal site for my work as a software developer: web applications, digital products, and blockchain-powered experiences.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Render)

This repo includes a [`render.yaml`](./render.yaml) for Render Static Sites.

1. Push to GitHub.
2. In Render: **New → Blueprint** (or connect the repo as a Static Site).
3. Use build `npm install && npm run build` and publish path `dist` if prompted.
4. The SPA rewrite (`/*` → `/index.html`) is already defined in `render.yaml`.

## License

[MIT](./LICENSE)
