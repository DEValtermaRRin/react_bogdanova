import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputAdd, InputAddProps } from './InputAdd';
import style from './InputAdd.module.scss';

export default {
  title: 'ChatsForm/Components/InputAdd',
  component: InputAdd,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Поле ввода имени чата',
      defaultValue: style.inputAdd,
      options: [],
      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof InputAdd>;

const Template: ComponentStory<typeof InputAdd> = (args: InputAddProps) => (
  <InputAdd {...args} />
);

export const Default = Template.bind({});

Default.arguments = { variant: style.inputAdd };
