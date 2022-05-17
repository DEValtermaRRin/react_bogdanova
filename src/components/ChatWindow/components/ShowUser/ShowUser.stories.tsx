import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShowUser, ShowUserProps } from './ShowUser';
import style from './ShowUser.module.scss';
import { string } from 'prop-types';

export default {
  title: 'Components/ChatWindow',
  component: ShowUser,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Отображение пользователя в окне сообщений',
      defaultValue: style.showuser,
      options: [],
      control: { type: 'radio' },
    },
    children: {
      type: 'string',
      description: 'Отображение приветствия в окне сообщений',
      defaultValue: style.showuser,
      options: [],
      control: { type: 'string' },
    },
    color: {
      type: string,
      description: 'Цвет',
      defaultValue: style.showuser,
      options: style.showuser__color,
      control: {
        color: 'color',
      },
    },
    size: {
      type: string,
      defaultValue: style.showuser,
      options: [style.showuser__weight, style.showuser__weightSmall],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ShowUser>;

const Template: ComponentStory<typeof ShowUser> = (args: ShowUserProps) => (
  <ShowUser {...args} />
);

export const Default = Template.bind({});

Default.arguments = { variant: style.showuser };

export const Text = Template.bind({});
Text.arguments = { children: 'Hello,' };

export const Color = Template.bind({});
Color.arguments = { color: '#284779' };

export const Weight = Template.bind({});
Weight.arguments = { size: '700' };
