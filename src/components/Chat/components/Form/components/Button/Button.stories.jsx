import React from 'react';

import { Button } from './Button';

export default {
  title: 'Conponents/Button',
  component: Button,

  /*   argTypes: {
    backgroundColor: { control: 'color' },
  }, */
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
