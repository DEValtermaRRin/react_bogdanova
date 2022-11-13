import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormProps } from './Form';

import style from './Form.module.scss';

export default {
  title: 'Components/ChatWindow/Components/Form',
  component: Form,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант расположения элементов в форме',
      defaultValue: style.form,
      options: [style.form__flexAround],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args: FormProps) => (
  <Form {...args} />
);

export const Default = Template.bind({});

Default.arguments = {
  variant: style.form,
};
