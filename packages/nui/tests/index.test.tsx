import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from '../src';

test('The button should render correctly', async () => {
  render(<Button>Demo Button</Button>);
  const button = screen.getByText('Demo Button');
  expect(button).toBeInTheDocument();
});
