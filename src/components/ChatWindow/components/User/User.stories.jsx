import React from 'react';
import { User } from './User';

export default {
  component: User,
};

const Template = (args) => <User {...args} />;

export const Test = Template.bind({});
