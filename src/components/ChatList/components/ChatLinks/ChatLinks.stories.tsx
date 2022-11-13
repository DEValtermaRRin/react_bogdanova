import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatLinks } from './ChatLinks';
import style from './ChatLinks.module.scss';

export default {
  title: 'ChatList/Components/ChatLinks',
  component: ChatLinks,
  argTypes: {
    variant: {
      type: 'string',
      description: 'ссылки',
      defaultValue: [style.chatlinks, style.chatlink, style.chatlnk],

      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof ChatLinks>;

const Template: ComponentStory<typeof ChatLinks> = () => <ChatLinks />;

export const Default = Template.bind({});

Default.arguments = {
  variant: [style.chatlinks, style.chatlink, style.chatlnk],
};
