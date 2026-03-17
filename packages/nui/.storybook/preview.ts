import type { Preview } from '@storybook/react';
import '#ui/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    docs: { toc: true },
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#111',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
};

export default preview;
