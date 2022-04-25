import React from 'react';
import { Chat } from './Chat';

export default {
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const Test = Template.bind({});
