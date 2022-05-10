import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Workspace } from './Workspace';
import style from './Workspace.module.scss';

export default {
  title: 'pages/Workspace',
  component: Workspace,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Рабочая область',
      defaultValue: style.workspace,
      options: [],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Workspace>;

const Template: ComponentStory<typeof Workspace> = () => (
  <Workspace />
);

export const Default = Template.bind({});

Default.arguments = { variant: style.workspace };
