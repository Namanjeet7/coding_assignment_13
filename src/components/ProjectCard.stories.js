import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import ProjectCard from './ProjectCard';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Project',
  description: 'This is a primary state card.',
  primary: true,
  onClick: () => {
    console.log('Primary project card clicked');
  },
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = await canvas.getByText('Primary Project');
  await userEvent.click(card);
};

export const Hovered = Template.bind({});
Hovered.args = {
  title: 'Hovered Project',
  description: 'This is hovered state preview.',
  hovered: true,
  onClick: () => {
    console.log('Hovered project card clicked');
  },
};
Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = await canvas.getByText('Hovered Project');
  await userEvent.hover(card);
};

export const Pressed = Template.bind({});
Pressed.args = {
  title: 'Pressed Project',
  description: 'This is pressed state preview.',
  pressed: true,
  onClick: () => {
    console.log('Pressed project card clicked');
  },
};
Pressed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = await canvas.getByText('Pressed Project');
  await userEvent.click(card);
};
