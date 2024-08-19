import type { Meta, StoryObj } from "@storybook/react";
import { StoreTab } from ".";

const meta: Meta<typeof StoreTab> = {
};

export default meta;

type Story = StoryObj<typeof meta>;

export const _Tab: Story = {
  render: () => <StoreTab />
}

