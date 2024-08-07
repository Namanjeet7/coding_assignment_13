import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('renders ProjectCard with title and description', () => {
  const { getByText } = render(<ProjectCard title="Test Title" description="Test Description" />);
  expect(getByText('Test Title')).toBeInTheDocument();
  expect(getByText('Test Description')).toBeInTheDocument();
});

test('applies primary class when primary prop is true', () => {
  const { container } = render(<ProjectCard title="Primary Project" primary />);
  expect(container.firstChild).toHaveClass('project-card-primary');
});
