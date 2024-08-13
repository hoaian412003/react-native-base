import { IInputProps, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import RNDatePicker, { DatePickerProps } from 'react-native-date-picker';

type Props = {
  children: React.ReactElement<IInputProps>;
} & DatePickerProps;
export const DatePicker: React.FC<Props> = ({ children, ...props }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());


  useEffect(() => {
  }, [value])

  return <>
    <TouchableOpacity style={{ width: "100%" }} onPress={() => setOpen(!open)}>
      <View pointerEvents='none'>
        {children}
      </View>
    </TouchableOpacity>
    <RNDatePicker
      open={open}
      modal
      onConfirm={(value) => setValue(value)}
      {...props}
    >
    </RNDatePicker>
  </>
}
