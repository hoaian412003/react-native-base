import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryHeader } from './SecondaryHeader';
import { Header } from './Header';

const meta: Meta = {};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  render: () => <Header />
}
export const Secondary: Story = {
  render: () => <SecondaryHeader />
}
