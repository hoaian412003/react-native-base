import type { Meta, StoryObj } from '@storybook/react';
import { Camera } from '.';
import { CameraPermssions } from './CameraPermission';

const meta: Meta<typeof Camera> = {
  component: Camera
}

export default meta;

type Story = StoryObj<typeof meta>;

export const _Camera: Story = {
  render: () => <Camera style={{ flex: 1 }} />
}

export const _CameraPermission: Story = {
  render: () => <CameraPermssions flex={1} px={4} />
}
