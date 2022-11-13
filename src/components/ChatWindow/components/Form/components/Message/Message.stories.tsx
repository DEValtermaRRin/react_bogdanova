import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Message, MessageProps } from './Message';
import style from './Message.module.scss';

export default {
  title: 'Components/ChatWindow/Components/Form/Components/InputMessage',
  component: Message,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида поля для ввода сообщений',
      defaultValue: style.message__default,
      options: [
        style.msg__widthBorder,
        style.msg__borderRadius,
        style.msg__width,
        style.msg__lihgt,
      ],
      control: {
        type: 'radio',
      },
    },
    children: {
      type: 'string',
      description: 'Вариант внешнего вида сообщений',
      defaultValue: style.message__default,
      options: [style.msg__textAlign, style.msg__text],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args: MessageProps) => (
  <Message {...args} />
);

export const Default = Template.bind({});

Default.arguments = {
  variant: style.message__default,
  children: 'input some text',
};
