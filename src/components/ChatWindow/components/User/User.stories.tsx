import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User, UserProps } from './User';
import style from './User.module.scss';

export default {
  title: 'Components/ChatWindow',
  component: User,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Выплывающий инпут',
      defaultValue: style.user,
      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args: UserProps) => (
  <User {...args} />
);

export const Default = Template.bind({});

Default.arguments = { variant: style.user };
