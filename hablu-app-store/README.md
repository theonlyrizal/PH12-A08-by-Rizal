````markdown
# hablu-app-store

This folder contains the Hablu App Store React application (built with Vite). It is a small marketplace demo used to display apps, view details with charts, and install/uninstall apps persisted in localStorage.

## Live demo

https://hablu-app-store-by-theonlyrizal.netlify.app/

## Quick start

```powershell
cd hablu-app-store
npm install
npm run dev
```
````

Open http://localhost:5173 in your browser.

## Main technologies

- React 19
- Vite
- React Router
- Tailwind CSS + DaisyUI
- Recharts
- react-toastify

## Notable dependencies (from package.json)

- `react`, `react-dom`
- `react-router`, `react-router-dom`
- `tailwindcss`, `daisyui`, `@tailwindcss/vite`
- `recharts`
- `axios`
- `react-toastify`
- `numeral`
- `@fortawesome/*` (icons)
- `@uidotdev/usehooks` (for `useLocalStorage`)

## Features

- Browse all apps (data loaded from `public/data/apps.json`)
- App details page with statistics and charts
- Install / Uninstall apps (persisted via localStorage)
- Search and filter apps
- Responsive design

## Screenshots

If you'd like to add a screenshot, place `screenshot.png` inside `hablu-app-store/public/` and reference it here, e.g.:

![App screenshot](/screenshot.png)

## How routing handles missing apps

When visiting `/apps/:id` if the app id is not present in `public/data/apps.json` the loader returns a not-found indicator and `AppDetails.jsx` renders `AppNotFound.jsx`.

If you see the `ErrorPage` instead of `AppNotFound`, it usually means an error occurred while rendering `AppNotFound` (for example, a missing import). Fixing the runtime error will cause the intended not-found page to render.

## Contributing

Small fixes and improvements welcome — open a PR against `main`.

## License

Licensed under terms provided by the project owner.

```

```
