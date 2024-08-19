import { IInputProps, Theme } from "native-base";
import { DeepPartial } from "../types";

export const Input: DeepPartial<Theme['components']['Input']> = {
  baseStyle: {
    borderRadius: 12,
    borderColor: 'border.primary',
    py: 4,
    px: 4,
    placeholderColor: 'text.placeholder',
    _focus: {
      borderColor: 'brand',
      backgroundColor: 'background.primary'
    },
  } as IInputProps,
  defaultProps: {
    size: 'lg',
  },
}
