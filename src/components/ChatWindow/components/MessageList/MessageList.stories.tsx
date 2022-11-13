import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MessageList, MessageListProps } from './MessageList';
import style from './MessageList.module.scss';

export default {
  title: 'Components/ChatWindow/Components/MessageList',
  component: MessageList,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Фон сообщений',
      defaultValue: style.messagelist,
      options: style.messagelistLight,
      control: { backgroundColor: 'color' },
    },
  },
} as ComponentMeta<typeof MessageList>;

const Template: ComponentStory<typeof MessageList> = (
  args: MessageListProps,
) => <MessageList {...args} />;

export const Default = Template.bind({});

Default.arguments = { variant: style.messagelist };
