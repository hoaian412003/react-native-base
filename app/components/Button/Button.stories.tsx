import type { Meta, StoryObj } from '@storybook/react';
import { Button, Center, Heading } from 'native-base'
import React from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => <Center flex={1} style={{ gap: 10 }}>
    <Button width={200} variant="solid" size="lg">
      Solid
    </Button>
    <Button width={200} variant="solid" isDisabled>
      Solid Disabled
    </Button>
    <Button width={200} variant="solid" isLoading>
      Solid Loading
    </Button>
    <Button width={200} variant="outline">
      Outline
    </Button>
    <Button width={200} variant="outline" isDisabled>
      Outline Disabled
    </Button>
    <Button width={200} variant="outline" isLoading>
      Outline Loading
    </Button>
  </Center>
}
