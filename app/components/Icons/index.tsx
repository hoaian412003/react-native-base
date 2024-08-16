import { AntDesign, Feather } from "@expo/vector-icons";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";

type Props = Omit<IconProps<'any'>, 'name'>

const Icons = {
  eye: (props: Props) => <AntDesign {...props} name="eyeo" />,
  eyeOff: (props: Props) => <Feather {...props} name="eye-off" />,
  down: (props: Props) => <AntDesign {...props} name="down" />,
  arrowLeft: (props: Props) => <AntDesign {...props} name="arrowleft" />
}

export default Icons;
