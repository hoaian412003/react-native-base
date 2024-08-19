import { Meta, StoryObj } from "@storybook/react/*";
import { UpdatePasswordScreen } from ".";

const meta: Meta<typeof UpdatePasswordScreen> = {
  name: "Update Password"
}

export default meta;

type Story = StoryObj<typeof meta>;

export const _Screen: Story = {
  render: () => <UpdatePasswordScreen />
}
