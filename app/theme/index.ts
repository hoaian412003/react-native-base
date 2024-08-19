import { Theme, extendTheme } from "native-base";
import { Button } from './button';
import { Input } from "./input";

export const theme: Theme = extendTheme({
  colors: {
    brand: '#303030',
    text: {
      label: '#FFFFFF',
      primary: '#303030',
      placeholder: '#808080',
      link: '#FF5148',
      success: '#4BBB47',
      secondary: "#606060"
    },
    background: {
      primary: '#FFFFFF',
      foreground: "#000000",
      secondary: "#EDEEF0",
    },
    border: {
      primary: '#CDCDCD'
    }
  },
  components: {
    Button,
    Input
  },
})
