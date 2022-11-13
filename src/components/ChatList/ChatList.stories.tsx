import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatList } from './ChatList';
import style from './ChatList.module.scss';

export default {
  title: 'ChatList',
  component: ChatList,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Окно чатов',
      defaultValue: style.chatlist,
      options: [style.chatlist__light],
      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = () => <ChatList />;

export const Default = Template.bind({});

Default.arguments = { variant: style.chatlist };
