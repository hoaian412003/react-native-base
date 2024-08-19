import { ConditionContainer, PasswordInput } from "@/app/components";
import { SecondaryHeader } from "@/app/components/Header"
import { Button, Column, Heading, View } from "native-base"
import { useTranslation } from "react-i18next"

export const UpdatePasswordScreen = () => {
  const { t } = useTranslation();
  return <Column flex={1}>
    <SecondaryHeader />
    <Heading size="lg" px={4}>{t("Update Password")}</Heading>

    <Column px={4} mt={10}>
      <ConditionContainer conditions={[{
        name: t("Min 8 characters"),
        isValid: false
      }, {
        name: t("Include A,a,number,special(#,@,...)"),
        isValid: false
      }]}>
        <PasswordInput placeholder="Enter password" />
      </ConditionContainer>
      <PasswordInput placeholder="Retype password" />
    </Column>
    <View px={4} mt="auto">
      <Button size="lg">
        {t("Update")}
      </Button>
    </View>
  </Column>
}
