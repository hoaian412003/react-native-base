import { IInputProps, IconButton, Input } from "native-base"
import { useState } from "react";
import Icons from "../Icons";

type Props = IInputProps;
export const PasswordInput: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  return <Input
    {...props}
    type={show ? 'text' : 'password'}
    InputRightElement={
      <IconButton onPress={() => setShow(!show)}>
        {
          show ?
            <Icons.eyeOff size={20} /> :
            <Icons.eye size={20} />
        }
      </IconButton>
    }
  />
}
