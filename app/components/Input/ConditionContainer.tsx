import { Column, IBoxProps, Row, Text } from "native-base"
import Icons from "../Icons";

type Props = {
  conditions: Array<{
    name: string,
    isValid: boolean
  }>
} & IBoxProps;

export const ConditionContainer: React.FC<Props> = ({ conditions, children, ...props }) => {
  return <Column space="1" {...props}>
    {children}
    {conditions.map((condition, index) => {
      console.log("condition: ", condition)
      return (
        <Row key={index} alignItems="center" space={2}>
          <Icons.check size={15} color={condition.isValid ? 'text.success' : 'text.primary'} />
          <Text fontSize={12} color={condition.isValid ? 'text.success' : 'text.primary'}>
            {condition.name}
          </Text>
        </Row>
      )
    }
    )
    }
  </Column>
}
