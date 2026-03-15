# Contributing

Thank you for your interest in contributing to norush.me! Here are some guidelines to help you get started.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/norush.me.git`
3. Change into the directory: `cd norush.me`
4. Install dependencies: `pnpm install`
5. Start the development server: `pnpm dev`

## Project Structure

This is a monorepo with the following structure:

- `apps/site` - The main Next.js application
- `packages/nui` - Reusable UI components
- `packages/i18n` - Internationalization utilities
- `packages/rehype-shiki` - Syntax highlighting utilities

## Running Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm type-check` - Type check all packages and apps
- `pnpm test` - Run tests
- `pnpm format` - Format all code

## Pull Requests

1. Create a new branch for your feature/fix: `git checkout -b feature-name`
2. Make your changes
3. Add tests if applicable
4. Run `pnpm format` to format your code
5. Run `pnpm lint` to ensure code quality
6. Submit a pull request to the main branch

## Code Style

- Use TypeScript consistently
- Follow the existing style for the codebase
- Write meaningful commit messages
- Add documentation for any new features or APIs
- Add tests for any new functionality

## Questions?

If you have any questions, feel free to open an issue or contact the maintainers.
