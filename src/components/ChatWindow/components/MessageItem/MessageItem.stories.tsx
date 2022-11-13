import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageItem, MessageProps } from './MessageItem';

import style from './MessageItem.module.scss';

export default {
  title: 'Components/ChatWindow/Components/MessageItem',
  component: MessageItem,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Цветовая схема сообщений',
      defaultValue: [style.msg, style.bot],
      control: {
        background: 'color',
      },
    },
  },
} as ComponentMeta<typeof MessageItem>;

const Template: ComponentStory<typeof MessageItem> = (args: MessageProps) => {
  return <MessageItem {...args} />;
};

export const Default = Template.bind({});

Default.arguments = {
  variant: [style.msg, style.bot],
};
