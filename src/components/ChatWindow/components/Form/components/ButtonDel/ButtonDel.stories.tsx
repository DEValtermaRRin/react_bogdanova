import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonDel } from './ButtonDel';
import style from './ButtonDel.module.scss';

export default {
  title: 'Components/ChatWindow/Components/Form/Components/ButtonDel',
  component: ButtonDel,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: style.delbutton__dark,
      options: [style.delbutton__dark, style.delbutton__light],
      control: {
        type: 'radio',
      },
    },
    children: {
      variant: {
        type: 'string',
        description: 'Вариант изображения кнопки',
        defaultValue: style.delChat__dark,
        options: [style.delChat__dark, style.delChat__light],
        control: {
          type: 'radio',
        },
      },
    },
  },
} as ComponentMeta<typeof ButtonDel>;
const Template: ComponentStory<typeof ButtonDel> = () => (
  <ButtonDel />
);

export const Default = Template.bind({});

Default.arguments = {
  variant: style.delbutton__dark,
  children: style.delChat__dark,
};

export const Light = Template.bind({});
Light.arguments = {
  variant: style.delbutton__light,
  children: style.delChat__lihgt,
};
