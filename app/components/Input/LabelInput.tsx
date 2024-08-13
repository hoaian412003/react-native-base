import { Flex, Heading, IInputProps, Input, InputGroup, Text } from "native-base";
import React from "react";

type Props = {
  label: string;
} & IInputProps;

export const LabelInput: React.FC<Props> = ({ label, ...props }) => {
  return <Flex
    px={3}
    py={2}
    borderColor="border.primary"
    borderWidth={1}
    borderRadius="12"
    w="full"
  >
    <Heading size="xs" color="text.placeholder">{label}</Heading>
    <Input variant={"unstyled"} size="lg" py={2} px={0} {...props} />
  </Flex>
}
