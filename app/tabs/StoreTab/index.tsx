import { Images } from "@/app/assets";
import Icons from "@/app/components/Icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Column, Heading, Image, Input, Row, View } from "native-base"
import { useTranslation } from "react-i18next"

export const StoreTab = () => {
  const { t } = useTranslation();
  return <Column flex={1}>
    <Heading textAlign="center" size="lg" fontWeight={500}>FitNet</Heading>
    <Column px={4} flex={1}>
      <TouchableOpacity onPress={() => { }}>
        <View pointerEvents="none">
          <Input
            placeholder={t("Search")}
            py={2}
            backgroundColor="background.secondary"
            borderRadius={8}
            color="text.secondary"
            borderWidth={0}
            rightElement={
              <View p={3}>
                <Icons.search size={16} />
              </View>
            }
          />
        </View>
      </TouchableOpacity>
      <Image source={Images.Banner} alt="" style={{ objectFit: 'contain', maxHeight: '30%' }} mt={5} />
      <Column flex={1} mt={4}>
        <Row alignItems="center" justifyContent="space-between">
          <Heading size="lg">
            {t("Popular")}
          </Heading>
          <TouchableOpacity>
            <Icons.options size={30} />
          </TouchableOpacity>
        </Row>
      </Column>
    </Column>
  </Column>
}
