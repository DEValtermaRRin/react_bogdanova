import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
import style from './Header.module.scss';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Внешний вид вкладок',
      defaultValue: style.header,
      options: [style.lightHeader],
      control: { background: 'color' },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

Default.arguments = { variant: style.header };
