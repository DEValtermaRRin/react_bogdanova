import React from 'react';
import { Message } from './Message';

export default {
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Test = Template.bind({});
