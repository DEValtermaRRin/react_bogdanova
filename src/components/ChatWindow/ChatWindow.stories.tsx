import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatWindow } from './ChatWindow';
import style from '.ChatWindow.module.scss';

export default {
  title: 'ChatWindow',
  component: ChatWindow,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Окно чата',
      defaultValue: style.chat,
      options: [style.chat__light],
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof ChatWindow>;

const Template: ComponentStory<typeof ChatWindow> = () => <ChatWindow />;

export const Default = Template.bind({});

Default.arguments = { variant: style.chat };
