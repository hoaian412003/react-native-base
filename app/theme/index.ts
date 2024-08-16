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
      success: '#4BBB47'
    },
    background: {
      primary: '#FFFFFF'
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
