import { Images } from "@/app/assets"
import { Box, Column, Flex, Heading, Image, Row, Text, View } from "native-base"
import Icons from "../Icons"

export const GymCard = () => {
  return <Column flex={1}>
    <Image alt="" source={Images.GymExample} style={{ objectFit: 'contain' }} size="xl" />
    <Column flex={1}>
      <Heading size="sm">Elite Fitness</Heading>
      <Row alignItems="flex-start" space={1}>
        <Icons.location size={16} style={{ marginTop: 2 }} />
        <Text fontSize={12} textAlign="start" flex={1}>
          Quận 10, TP. Hồ Chí Minh  Khoảng cách: 1.5 km
        </Text>
      </Row>
    </Column>
  </Column>
}
