import type { Meta, StoryObj } from '@storybook/react';
import { Center, Input, Text } from 'native-base';
import { PasswordInput } from './PasswordInput';
import { OtpInput } from './OtpInput';
import { LabelInput } from './LabelInput';
import Icons from '../Icons';
import { DatePicker } from './DatePicker';
import { ConditionContainer } from './ConditionContainer';

const meta: Meta<typeof Input> = {
  title: "Input"
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Common: Story = {
  render: () => <Center padding={4} style={{ gap: 10 }}>
    <Input placeholder='Email hoặc số điện thoại' />
    <PasswordInput placeholder='Mật Khẩu' />
  </Center>
}

export const Otp: Story = {
  render: () => <Center flex={1}>
    <OtpInput pinCount={4} />
  </Center>
}

export const Label: Story = {
  render: () => <Center flex={1} px={4} style={{ gap: 10 }}>
    <LabelInput placeholder='175' label="Chiều Cao" InputRightElement={<Text fontSize={"md"} color="text.primary">cm</Text>} />
    <LabelInput placeholder='75' label="Cân Nặng" InputRightElement={<Text fontSize={"md"} color="text.primary">kg</Text>} />
    <DatePicker date={new Date()}>
      <LabelInput
        placeholder='04/01/2003'
        label="Ngày Sinh"
        InputRightElement={<Icons.down />}
      />
    </DatePicker>
  </Center>
}

export const _ConditionInput: Story = {
  render: () => <Center flex={1}>
    <ConditionContainer conditions={[
      {
        name: "Tối thiểu 8 kí tự",
        isValid: false
      },
      {
        name: "Bao gồm chữ in hoa, số, kí tự đặc biệt (#,@,...)",
        isValid: true
      }
    ]}>
      <PasswordInput placeholder='Mật khẩu' />
    </ConditionContainer>
  </Center>
}
