import { Meta, StoryObj } from "@storybook/react/*";
import { UpdateAvatarScreen } from ".";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { ConfirmImage } from "./components/ConfirmImage";
import { Images } from "@/app/assets";
import { Button, Center, IconButton, View } from "native-base";

const meta: Meta<typeof UpdateAvatarScreen> = {
}

export default meta;

type Story = StoryObj<typeof meta>;

export const _Screen: Story = {
  render: () => <UpdateAvatarScreen />
}

export const _ConfirmImage: Story = {
  render: () => {
    const ref = useRef<BottomSheet>(null);
    return <Center flex={1} px={4}>
      <Button onPress={() => ref.current?.expand()}>Confirm</Button>
      <ConfirmImage index={-1} ref={ref} source={Images.ExampleAvatar} />
    </Center>
  }
}
