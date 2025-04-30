# ENS DAO Governance

This monorepo contains two parts:

1. **Indexer** (`/indexer`): A Ponder + Hono service that indexes governance events from the ENS DAO smart contract and exposes a REST/GraphQL API.
2. **App** (`/app`): A Next.js frontend that consumes the indexer API to display, vote on, and interact with ENS DAO proposals.

---

## Prerequisites

- Node.js v18 or higher
- pnpm v9 or higher (preferred package manager)
- (Optional) Docker, if you prefer containerized setup

## Environment Variables

### Indexer

```bash
cd indexer
cp .env.example .env.local
# Edit .env.local:
# PONDER_RPC_URL_1=<Your Ethereum Mainnet JSON RPC URL>
```

### App (Frontend)

```bash
cd app
cp .env.example .env.local
# Edit .env.local:
# NEXT_PUBLIC_PONDER_URL=http://localhost:42069
```

## Install Dependencies

From the workspace root:

```bash
pnpm install
```

This installs both the `app` and `indexer` packages via pnpm workspaces.

## Local Development

1. **Start the Indexer** (in one terminal window/tab):

   ```bash
   cd indexer
   pnpm dev
   ```

   - The indexer will connect to Ethereum, sync events into a local PGlite database, and launch an API server at `http://localhost:42069`.

2. **Start the Frontend** (in another terminal window/tab):

   ```bash
   cd app
   pnpm dev
   ```

   - The Next.js app will run at `http://localhost:3000`.
   - It fetches proposal data from the indexer endpoint above.

## Production Build

### Build App

```bash
cd app
pnpm build
pnpm start
```

Fronted will run under production mode at port 3000 by default.

### Start Indexer in Production

```bash
cd indexer
pnpm start
```

The indexer will start in production mode using `ponder start` at port 42069.

## Deployment on Vercel

This repository includes a `vercel.json` at the root that:

- Builds the Next.js frontend from `/app`
- Builds the indexer API from `/indexer/src/api/index.ts`
- Routes `/proposals*` and `/graphql*` to the indexer functions
- Serves all other paths from the Next.js app

To deploy:

1. Sign in to Vercel and connect your GitHub/GitLab repo.
2. Ensure the following environment variables are set in Vercel:
   - `PONDER_RPC_URL_1` (Ethereum RPC URL)
   - `NEXT_PUBLIC_PONDER_URL` (the production indexer URL)
3. Push to your main branch—Vercel will automatically build and deploy both API and frontend.

---

Happy governing! Feel free to customize this guide as needed for your environment.
