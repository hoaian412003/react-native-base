import type { Meta, StoryObj } from '@storybook/react';
import { GymCard } from './GymCard';
import { Center, Row } from 'native-base';

const meta: Meta = {
}

export default meta;
type Story = StoryObj<typeof meta>;
export const _Gym: Story = {
  render: () => <Row flex={1} p={10} justifyContent="space-between" space={10}>
    <GymCard />
    <GymCard />
  </Row>
}
