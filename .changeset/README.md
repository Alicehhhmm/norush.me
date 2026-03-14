# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

## Adding a Changeset

To add a changeset, run the following command:

```bash
pnpm changeset
```

This will create a new changeset file in the `.changeset` directory. Follow the prompts to describe your changes and select the appropriate version bump (major, minor, or patch).

## Creating a Changeset Manually

You can also create a changeset manually by creating a new `.md` file in the `.changeset` directory with the following format:

```
---
"@nw/site": minor
"@nw/ui": patch
---

Description of the changes made.
```

## Releasing

When you're ready to release, run:

```bash
pnpm changeset:version
```

This will update the package versions and generate changelog entries based on the accumulated changesets.

## Checking Changeset Status

To check the current status of changesets, run:

```bash
pnpm changeset:status
```

## Additional Commands

- `pnpm changeset:add` - Add a new changeset interactively
- `pnpm changeset:tag` - Tag versions after publishing
- `pnpm changelog` - Generate changelog from changesets
- `pnpm release` - Build and publish packages
