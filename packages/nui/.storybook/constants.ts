// Supported themes for the Storybook
// These match the data-theme attributes defined in src/styles/theme.css
export const STORYBOOK_THEMES = {
  'Fluo Light': 'fluo-light',
  'Fluo Dark': 'fluo-dark',
  'Claude Light': 'claude-light',
  'Claude Dark': 'claude-dark',
  'Warm Light': 'warm-light',
  'Warm Dark': 'warm-dark',
  'Cool Light': 'cool-light',
  'Cool Dark': 'cool-dark',
  'Default System': 'default-system',
};

// This defines "execution" modes that Chromatic will run on the each Storybook Story
// This allows us to test each Story with different parameters
// @see https://www.chromatic.com/blog/introducing-story-modes/
export const STORYBOOK_MODES = {
  'fluo-light': {
    theme: 'Fluo Light',
    viewport: 'large',
  },
  'fluo-dark': {
    theme: 'Fluo Dark',
    viewport: 'large',
  },
  'claude-light': {
    theme: 'Claude Light',
    viewport: 'large',
  },
  'claude-dark': {
    theme: 'Claude Dark',
    viewport: 'large',
  },
};

// These are the supported Viewports for our Storybook Stories
// It is also the different viewports that Chromatic will run the Visual Regression Tests
export const STORYBOOK_SIZES = {
  small: { name: 'Small', styles: { width: '414px', height: '896px' } },
  large: { name: 'Large', styles: { width: '1024px', height: '768px' } },
};
