import React from 'react';
import { Form } from './Form';

export default {
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Test = Template.bind({});
