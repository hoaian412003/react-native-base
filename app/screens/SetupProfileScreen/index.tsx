import { DatePicker, LabelInput } from "@/app/components";
import { SecondaryHeader } from "@/app/components/Header"
import Icons from "@/app/components/Icons";
import { Button, Column, Progress, View } from "native-base"
import { useTranslation } from "react-i18next"

export const SetupProfileScreen = () => {
  const { t } = useTranslation();
  return <Column flex={1}>
    <SecondaryHeader title={t("Setup Profile")} />

    <Column px={4} mt={10} space={4}>
      <LabelInput label={t("Height")} rightElement={<Icons.down />} placeholder="170 cm" />

      <LabelInput label={t("Weight")} rightElement={<Icons.down />} placeholder="70 kg" />

      <DatePicker date={new Date()}>
        <LabelInput label={t("Brith day")} rightElement={<Icons.down />} placeholder="04/01/2003" />
      </DatePicker>

      <LabelInput label={t("Gender")} rightElement={<Icons.down />} placeholder={t("Male")} />
    </Column>


    <View mt="auto" px={4}>
      <Progress value={50} colorScheme="light" mb="10" w="70%" mx="auto" />
      <Button size="lg">
        {t("Continue")}
      </Button>
    </View>
  </Column>
}
