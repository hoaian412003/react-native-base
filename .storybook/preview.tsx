import type { Preview } from '@storybook/react';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../app/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: any) => {
      return <NativeBaseProvider theme={theme}>
        <Story />
      </NativeBaseProvider>
    }
  ]
};

export default preview;
