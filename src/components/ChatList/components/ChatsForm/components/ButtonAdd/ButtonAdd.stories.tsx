import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonAdd } from './ButtonAdd';
import style from './ButtonAdd.module.scss';

export default {
  title: 'ChatsForm/Components/ButtonAdd',
  component: ButtonAdd,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Кнопка добавления чата',
      defaultValue: style.ButtonAdd,
      options: [],
      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof ButtonAdd>;

const Template: ComponentStory<typeof ButtonAdd> = () => <ButtonAdd />;

export const Default = Template.bind({});

Default.arguments = { variant: style.ButtonAdd };
