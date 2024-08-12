import type { Meta, StoryObj } from '@storybook/react';
import { Center, Input } from 'native-base';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof Input> = {
  title: "Input"
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Center padding={4} style={{ gap: 10 }}>
    <Input placeholder='Email hoặc số điện thoại' />
    <PasswordInput placeholder='Mật Khẩu' />
  </Center>
}
