import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonSend, ButtonSendProps } from './ButtonSend';
import style from './ButtonSend.module.scss';

export default {
  title: 'Components/ChatWindow/Components/Form/Components/Button',
  component: ButtonSend,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: style.btn__dark,
      options: [style.btn__dark, style.btn__light],
      conrtol: {
        type: 'radio',
      },
      backgroundColor: { control: 'color' },
    },
  },
} as ComponentMeta<typeof ButtonSend>;

const Template: ComponentStory<typeof ButtonSend> = (args: ButtonSendProps) => (
  <ButtonSend {...args} />
);

export const Default = Template.bind({});

Default.arguments = {
  variant: style.btn__dark,
};

export const Light = Template.bind({});
Light.arguments = {
  variant: style.btn__light,
};
