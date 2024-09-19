import type { Meta, StoryObj } from "@storybook/react";
import { StoreTab } from ".";
import { GymCard } from "./components";
import { GymMock } from "@/app/mock";
import { Center } from "native-base";

const meta: Meta<typeof StoreTab> = {
};

export default meta;

type Story = StoryObj<typeof meta>;

export const _Tab: Story = {
  render: () => <StoreTab />
}
export const _GymCard: Story = {
  render: () => <Center flex={1} padding={10}>
    <GymCard data={GymMock.one()} />
  </Center>

}
