import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.play = async ({ canvasElement }) => {
  console.log('Default contact info displayed.');
};

export const WithContactInfo = Template.bind({});
WithContactInfo.args = {
  contactInfo: 'Contact us at example@example.com',
};
WithContactInfo.play = async ({ canvasElement }) => {
  console.log('Provided contact info displayed.');
};

export const WithSocialLinks = Template.bind({});
WithSocialLinks.args = {
  contactInfo: 'Contact us at example@example.com',
  socialLinks: [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
  ],
};
WithSocialLinks.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const facebookLink = await canvas.getByText('Facebook');
  await userEvent.click(facebookLink);
  console.log('Facebook link clicked');
};
