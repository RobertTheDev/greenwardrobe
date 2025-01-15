import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import Index from '../routes/_index';

test('Index Page', () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});
