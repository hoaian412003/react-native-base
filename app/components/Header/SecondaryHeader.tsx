import { Flex, Heading, IBoxProps, IFlexProps, Row, View } from "native-base"
import Icons from "../Icons"
import { TouchableOpacity } from "react-native"

type Props = {
  center?: React.ReactElement,
  title?: string;
  right?: React.ReactElement,
} & IBoxProps;

export const SecondaryHeader: React.FC<Props> = ({ title, center, right, ...props }) => {
  return <Row padding={4} alignItems="center" justifyContent="space-between" {...props}>
    <View flex={1}>
      <TouchableOpacity>
        <Icons.arrowLeft size={25} />
      </TouchableOpacity>
    </View>
    <View flex={3} alignItems="center">
      {title ? <Heading size="md">
        {title}
      </Heading> : center}
    </View>
    <View flex={1}>
      {right}
    </View>
  </Row>
}
