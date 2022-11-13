import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatForm } from './ChatsForm';
import style from './ChatsForm.module.scss';

export default {
  title: 'ChatList/Components/ChatForm',
  component: ChatForm,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Форма чатов',
      defaultValue: style.chatsform,
    },
  },
} as ComponentMeta<typeof ChatForm>;

const Template: ComponentStory<typeof ChatForm> = () => <ChatForm />;

export const Default = Template.bind({});

Default.arguments = { variant: style.chatsform };
