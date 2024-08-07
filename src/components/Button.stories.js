import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Default',
// };

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary',
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Primary');
  await userEvent.click(button);
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Disabled');
  await userEvent.click(button);
};

export const Hovered = Template.bind({});
Hovered.args = {
  hovered: true,
  children: 'Hovered',
};
Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Hovered');
  await userEvent.hover(button);
};

export const Pressed = Template.bind({});
Pressed.args = {
  pressed: true,
  children: 'Pressed',
};
Pressed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByText('Pressed');
  await userEvent.click(button);
};
