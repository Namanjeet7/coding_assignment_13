import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: 'My Logo',
};
WithLogo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const logo = await canvas.getByText('My Logo');
  console.log('Logo displayed:', logo.textContent);
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  logo: 'My Logo',
  navLinks: ['Home', 'About', 'Contact'],
};
WithNavigation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const logo = await canvas.getByText('My Logo');
  console.log('Logo displayed:', logo.textContent);

  const homeLink = await canvas.getByText('Home');
  await userEvent.click(homeLink);
  console.log('Home link clicked');

  const aboutLink = await canvas.getByText('About');
  await userEvent.click(aboutLink);
  console.log('About link clicked');

  const contactLink = await canvas.getByText('Contact');
  await userEvent.click(contactLink);
  console.log('Contact link clicked');
};
