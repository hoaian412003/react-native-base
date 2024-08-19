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
    <Column py={1} px={2}>
      {
        conditions.map((condition, index) => {
          return (
            <Row key={index} alignItems="center" space={2}>
              <Icons.check size={15} color={condition.isValid ? 'text.success' : 'text.primary'} />
              <Text fontSize={12} color={condition.isValid ? 'text.success' : 'text.primary'}>
                {condition.name}
              </Text>
            </Row>
          )
        })
      }
    </Column>
  </Column>
}
