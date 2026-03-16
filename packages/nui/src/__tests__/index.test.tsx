import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from '..';

test('The button should render correctly', () => {
  render(<Button>Demo Button</Button>);
  const button = screen.getByText('Demo Button');
  expect(button).toBeInTheDocument();
});
