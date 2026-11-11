# Marwan Hassan · Software engineering portfolio

A React and TypeScript portfolio with a project gallery and three directly addressable case studies. It uses Vite, Tailwind CSS and CSS custom properties for the two themes.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

If this checkout has no lockfile, run `npm install` before building and commit the generated lockfile.

## Content

Project data lives in `src/projects.ts`. Each project identifies its evidence. HAF Freight was reviewed from local commit `fa5bb4a` using `public/request.html`, `public/theme.js` and `server.js`. The shuttle uses the project presentation and Marwan's brief. Habitify uses Marwan's brief. Add repository URLs and source-verified contributions to the latter two entries once the source is available. The visuals are conceptual diagrams. Add authentic screenshots only after confirming publication rights. Add the approved résumé under `public/` and link it with a download attribute.

## Publish to Vercel

1. Create an empty GitHub repository, then initialize Git in this directory, commit the source and push it to the new repository.
2. In Vercel, sign in, select **Add New → Project**, and import that repository. Select the Vite preset and the project root. The build command and output directory are defined in `vercel.json`. No environment variables are needed.
3. Deploy using a personal Hobby project if eligible. Open the resulting public URL and test a direct visit and refresh on each case study before submitting the portfolio link.
