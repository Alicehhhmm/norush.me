#!/usr/bin/env node

/**
 * Script to generate combined changelogs for the monorepo
 * This script helps aggregate changelogs from multiple packages
 */
import { execSync } from 'child_process';
import { existsSync } from 'fs';

// Check if changesets is available
try {
  execSync('npx changeset --version', { stdio: 'pipe' });
} catch (error) {
  console.error('Changesets CLI is not available. Please install it.');
  process.exit(1);
}

// Check if there are any changesets to process
try {
  const status = execSync('npx changeset status', { encoding: 'utf-8' });

  if (status.trim() === 'No changesets present') {
    console.log('No changesets to process, skipping changelog generation.');
    process.exit(0);
  }

  console.log('Changesets found, generating changelog...');

  // Run changesets version command to update changelogs
  execSync('npx changeset version', { stdio: 'inherit' });
  console.log('Changelog generation completed successfully.');
} catch (error) {
  console.error('Error generating changelog:', error.message);
  process.exit(1);
}
