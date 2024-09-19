import Icons from "@/app/components/Icons";
import { IGym } from "@/app/types/gym";
import { Box, Column, Heading, IBoxProps, Image, Row, ScrollView, Text } from "native-base";
import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data: IGym
} & IBoxProps;
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
});

export const GymCard: React.FC<Props> = ({ data, ...props }) => {
  const { t } = useTranslation();
  return <Box {...props}>
    <Image
      source={{ uri: data.previewImages[0].url }}
      alt="Image"
      resizeMode="cover"
      width="100%"
      borderRadius={10}
      style={{
        aspectRatio: 1.5,
      }}
    />
    <Text bold mt={2}>
      {data.name}
    </Text>
    <Row space={2}>
      <Icons.location style={{ marginTop: 5 }} />
      <Column>
        <Text color="text.secondary">{data.address.formattedAddress}</Text>
        <Text color="text.secondary">{t("Distance")}: {data.distance} km</Text>
      </Column>
    </Row>

    <Row>
      <ScrollView mt={2} horizontal showsHorizontalScrollIndicator={false}>
        {data.subjects.map((s, index) => (
          <Box key={index} borderRadius={10} borderColor="border.primary" borderWidth={1} padding={1} mr={2}>
            <Image alt="Subject" source={{ uri: s.image }} width={8} height={8} />
          </Box>
        ))}
      </ScrollView>
    </Row>
    <Heading size="sm" mt={5}>{formatter.format(data.displayPrice)} / {t("Month")}</Heading>
    <Row mt={2} alignItems="center" space={1}>
      <Icons.star color="#FFC107" />
      <Text bold color="#FFC107">{data.medianRating}</Text>
      <Text color="text.secondary">({data.ratingCount})</Text>
    </Row>
  </Box>
}
