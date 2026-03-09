# @nw/ui

A modern, accessible UI component library built with React and TypeScript.

## Installation

```bash
pnpm add @nw/ui
```

```bash
npm install @nw/ui
```

```bash
yarn add @nw/ui
```

## Usage

### Basic Usage

```tsx
import { Button } from '@nw/ui';

const App = () => {
  return (
    <div>
      <Button primary label="Primary Button" />
      <Button label="Secondary Button" />
    </div>
  );
};
```

### Import Styles

```tsx
// Import the global styles
import '@nw/ui/styles';
```

Or import individual component styles:

```tsx
// Import specific component styles
import '@nw/ui/styles/button.css';
```

## Components

### Button

A customizable button component.

#### Props

| Prop              | Type                             | Default     | Description                         |
| ----------------- | -------------------------------- | ----------- | ----------------------------------- |
| `primary`         | `boolean`                        | `false`     | Whether the button is primary style |
| `backgroundColor` | `string`                         | `undefined` | Custom background color             |
| `size`            | `'small' \| 'medium' \| 'large'` | `'medium'`  | Size of the button                  |
| `label`           | `string`                         | required    | Label text for the button           |
| `onClick`         | `() => void`                     | `undefined` | Click handler                       |

## Development

### Scripts

- `pnpm dev` - Watch mode build
- `pnpm build` - Build the library
- `pnpm storybook` - Start Storybook development server
- `pnpm test` - Run tests
- `pnpm lint` - Lint code

### Building

To build the library:

```bash
pnpm build
```

This will generate both ESM and CJS builds in the `dist` directory.

## Contributing

See the [contributing guide](../../CONTRIBUTING.md) for more information.

## License

MIT
