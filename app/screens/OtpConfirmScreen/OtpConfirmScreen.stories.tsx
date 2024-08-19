import type { Meta, StoryObj } from "@storybook/react";
import { OtpConfirmScreen } from ".";

const meta: Meta<typeof OtpConfirmScreen> = {
}

export default meta;

type Story = StoryObj<typeof meta>;

export const _Screen: Story = {
  render: () => <OtpConfirmScreen />
}
