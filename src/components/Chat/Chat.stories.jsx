import React from 'react';
import { App } from './App';

export default {
  component: App,
};

const Template = (args) => <App {...args} />;

export const Test = Template.bind({});
