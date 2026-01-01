# norush.me

Personal website monorepo built with Next.js, TypeScript, and Tailwind CSS.

## Structure

This is a monorepo using pnpm workspaces and Turbo for build orchestration:

- `apps/site` - The main Next.js application
- `packages/i18n` - Internationalization utilities
- `packages/nui` - Reusable UI components
- `packages/rehype-shiki` - Syntax highlighting utilities

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v24+)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Development

```bash
# Run the development server for all apps
pnpm dev

# Run the development server for the site only
cd apps/site && pnpm dev
```

### Building

```bash
# Build all packages and apps
pnpm build

# Build the site only
cd apps/site && pnpm build
```

### Versioning and Releases

This project uses [Changesets](https://github.com/changesets/changesets) for versioning and changelogs.

```bash
# Add a new changeset
pnpm changeset

# Check current changeset status
pnpm changeset:status

# Manually generate changelog from accumulated changesets
pnpm changelog

# Publish packages (builds first, then publishes)
pnpm release

# Publish canary releases
pnpm release:canary
```

### Other Commands

```bash
# Lint all packages and apps
pnpm lint

# Type check all packages and apps
pnpm type-check

# Run tests across all packages and apps
pnpm test

# Clean all build artifacts
pnpm clean

# Format all code
pnpm format
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm type-check` - Type check all packages and apps
- `pnpm test` - Run tests
- `pnpm clean` - Clean build artifacts
- `pnpm format` - Format all code
- `pnpm changeset` - Add a new changeset
- `pnpm changeset:add` - Add a new changeset interactively
- `pnpm changeset:status` - Check changeset status
- `pnpm changeset:version` - Update versions based on changesets
- `pnpm changeset:publish` - Publish packages to npm
- `pnpm changelog` - Generate changelog from changesets
- `pnpm release` - Build and publish packages
- `pnpm release:canary` - Publish canary releases
