import type { Meta, StoryObj } from '@storybook/react';
import { GymCard } from './GymCard';
import { Box, Center } from 'native-base';

const meta: Meta = {
}

export default meta;
type Story = StoryObj<typeof meta>;
export const _Gym: Story = {
  render: () => {
    return <GymCard />
  }
}
