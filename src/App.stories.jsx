import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { App } from './App';

export default {
  title: 'Chat/App',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <App {...args} />;