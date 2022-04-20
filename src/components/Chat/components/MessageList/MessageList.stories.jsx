import React from 'react';
import { MessageList } from './MessageList';

export default {
  component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const Test = Template.bind({});
