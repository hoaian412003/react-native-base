import { values } from 'lodash';
import { IInputProps, Input, Row, useTheme } from 'native-base';
import { useEffect, useRef, useState } from 'react';

type Props = {
  pinCount: number;
} & IInputProps;

export const OtpInput: React.FC<Props> = ({ pinCount, ...props }) => {
  const theme = useTheme();
  const refs = useRef<Array<any>>([])
  const [value, setValue] = useState<Array<string>>(Array.from({
    length: pinCount,
  }).map(v => ""));

  const onEnterPin = (v: string, index: number) => {
    setValue((state) => state.map((s, i) => i === index ? v : s));
    if (index < pinCount - 1) refs.current[index + 1].focus();
    else refs.current[index].blur();
  }

  useEffect(() => {
    if (props.onChangeText) props.onChangeText(value.join(""));
  }, [value])

  return <Row style={{ gap: 10 }}>
    {Array.from({ length: pinCount }).map((_, index) => (
      <Input
        onChangeText={(value) => onEnterPin(value, index)}
        ref={el => refs.current[index] = el}
        variant="outline"
        size="lg"
        value={value[index]}
        key={index}
        width={16}
        height={16}
        textAlign="center"
        fontSize="xl"
        keyboardType='number-pad'
      />
    ))}
  </Row>
}
