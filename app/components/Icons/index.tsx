import { AntDesign, EvilIcons, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";

type Props = Omit<IconProps<'any'>, 'name'>

const Icons = {
  eye: (props: Props) => <AntDesign {...props} name="eyeo" />,
  eyeOff: (props: Props) => <Feather {...props} name="eye-off" />,
  down: (props: Props) => <AntDesign {...props} name="down" />,
  arrowLeft: (props: Props) => <AntDesign {...props} name="arrowleft" />,
  check: (props: Props) => <AntDesign {...props} name="check" />,
  search: (props: Props) => <AntDesign {...props} name="search1" />,
  options: (props: Props) => <Ionicons {...props} name="options" />,
  location: (props: Props) => <Octicons {...props} name="location" />,
}

export default Icons;
