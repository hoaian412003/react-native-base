import type { Meta, StoryObj } from '@storybook/react';
import { Center, Text, VStack } from 'native-base';

const meta: Meta<typeof Text> = {
  component: Text
}

export default meta;

type Story = StoryObj<typeof meta>;
export const _Text: Story = {
  render: () => <Center style={{ gap: 5 }} flex={1} alignItems="center">
    <Text fontSize="xs">xs</Text>
    <Text fontSize="sm">sm</Text>
    <Text fontSize="md">md</Text>
    <Text fontSize="lg">lg</Text>
    <Text fontSize="xl">xl</Text>
    <Text fontSize="2xl">2xl</Text>
    <Text fontSize="3xl">3xl</Text>
    <Text fontSize="4xl">4xl</Text>
    <Text fontSize="5xl">5xl</Text>
    <Text fontSize="6xl">6xl</Text>
  </Center>
}
