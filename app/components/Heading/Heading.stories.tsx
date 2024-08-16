import type { Meta, StoryObj } from '@storybook/react';
import { Center, Heading, Text } from 'native-base';

const meta: Meta<typeof Text> = {
  component: Heading
}

export default meta;

type Story = StoryObj<typeof meta>;
export const _Heading: Story = {
  render: () => <Center style={{ gap: 5 }} flex={1} alignItems="center">
    <Heading size="xs">xs</Heading>
    <Heading size="sm">sm</Heading>
    <Heading size="md">md</Heading>
    <Heading size="lg">lg</Heading>
    <Heading size="xl">xl</Heading>
    <Heading size="2xl">2xl</Heading>
    <Heading size="3xl">3xl</Heading>
    <Heading size="4xl">4xl</Heading>
  </Center>
}
