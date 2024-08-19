import type { Meta, StoryObj } from '@storybook/react';
import { SetupProfileScreen } from '.';

const meta: Meta<typeof SetupProfileScreen> = {
  name: "Setup Profile"
}

export default meta;
type Story = StoryObj<typeof meta>;

export const _Screen: Story = {
  render: () => <SetupProfileScreen />
}
