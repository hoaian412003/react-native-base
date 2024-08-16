import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from '.';

const meta: Meta<typeof LoginScreen> = {
  component: LoginScreen
}

export default meta;

type Story = StoryObj<typeof meta>;
export const _Screen: Story = {
  render: () => <LoginScreen />
}
