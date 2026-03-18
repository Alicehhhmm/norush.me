import type { Preview, ReactRenderer } from 'storybook-react-rsbuild';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import {
  STORYBOOK_MODES,
  STORYBOOK_SIZES,
  STORYBOOK_THEMES,
} from './constants';

import '#ui/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    chromatic: { modes: STORYBOOK_MODES },
    docs: {
      toc: true,
    },
    layout: 'centered',
    viewport: {
      viewports: STORYBOOK_SIZES,
    },
    backgrounds: {
      disable: false,
    },
  },

  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: STORYBOOK_THEMES,
      defaultTheme: 'Fluo Light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
