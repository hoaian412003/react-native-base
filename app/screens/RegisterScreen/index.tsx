import { PasswordInput } from "@/app/components"
import { SecondaryHeader } from "@/app/components/Header"
import { Button, Column, Heading, Input, Text, View } from "native-base"
import { useTranslation } from "react-i18next"

export const RegisterScreen = () => {
  const { t } = useTranslation()
  return <View flex={1}>
    <SecondaryHeader />
    <View padding={4}>
      <Heading size="lg">{t("Register")}</Heading>
    </View>
    <Column padding={4} style={{ gap: 5 }}>
      <Input placeholder={t("Username")} />
      <Input placeholder={t("Email")} />
      <Input placeholder={t("Phone number")} />
      <PasswordInput placeholder={t("Password")} />
      <PasswordInput placeholder={t("Re enter password")} />

      <Button mt={8} size="lg">{t("Register")}</Button>
    </Column>

    <View mt="auto" mb={10} alignItems="center">
      <Text>{t("Aldready have account? ")}
        <Text color="text.link" fontWeight={600}>{t("Login")}</Text>
      </Text>
    </View>
  </View>
}
