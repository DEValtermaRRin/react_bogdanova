import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppRouter } from './AppRouter';
import style from './AppRouter.module.scss';

export default {
  title: 'AppRouter',
  component: AppRouter,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Все приложение',
      defaultValue: [style.container, style.app],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AppRouter>;

const Template: ComponentStory<typeof AppRouter> = () => <AppRouter />;

export const Default = Template.bind({});

Default.arguments = { variant: [style.container, style.app] };
