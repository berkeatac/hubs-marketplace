# HubLister - Berke Atac

<img src="screenshots/img1.jpg" alt="Screenshot from application" style="width: 400px;"/>

## Installation

Install dependencies.

```bash
npm install
```

Run the application. ( Runs on port 3000 )

```bash
npm run dev
```

## Tech Stack

- TypeScript
- Vite
- React
- React Query
- Material UI
- Prettier / ESLint

## Decisions & Thoughts

- Used `React Query` for data fetching and caching. It is easy to use, and takes care of state, caching, error handling and loading states.
- Used `Material UI` for styling. It has a lot of components and can be customized easily.
- Used `memoization` techniques to prevent unnecessary re-renders, most importantly for the HubCard component that uses React.memo. This allows cards not to be re-rendered for filters state changes. This is observable through the Profiler.
- Implemented a `responsive design` using Grid, that should work on any sized screen.
- Used different sized images for logos and card media, to optimize loading times. (Although the card images could be optimized further)
- Didn't use a state management library, as the application is small and the state is not complex. (Although it could be implemented with Redux Toolkit or Context API)
- URL for the API could be stored in an environment variable, so that it could be changed easily depending on current environment. This was skipped for the sake of simplicity, during set up.
- I didn't write any tests, although I would have liked to. I would have used `Jest` and `React Testing Library` for unit tests, and `Cypress` for end-to-end tests. The runtime environment is set up for Jest already in the project.

## License

This project is licensed under the MIT License.
