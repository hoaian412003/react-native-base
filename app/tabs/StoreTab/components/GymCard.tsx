import { IGym } from "@/app/types/gym";
import { Box } from "native-base";
import { IBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import React from "react";

type Props = {
  data: IGym
} & IBoxProps;

export const GymCard: React.FC<Props> = (props) => {
  return <Box {...props}>
  </Box>
}
