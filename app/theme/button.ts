import { IButtonProps, Theme } from "native-base";
import { DeepPartial } from "../types";

export const Button: DeepPartial<Theme['components']['Button']> = {
  baseStyle: () => ({
    borderRadius: 12,
    _text: {
      bold: true
    },
    width: 'full'
  }),
  variants: {
    solid: () => ({
      bg: 'brand',
      _pressed: {
        opacity: 0.7,
        bg: 'brand'
      }
    } as IButtonProps),
    outline: () => ({
      borderColor: 'brand',
      _text: {
        color: 'text.primary'
      },
      _pressed: {
        opacity: 0.7,
        bg: 'background.primary'
      },
      _loading: {
        _spinner: {
          color: 'text.primary'
        }
      }
    } as IButtonProps)

  }
}
