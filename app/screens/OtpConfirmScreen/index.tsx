import { Images } from "@/app/assets";
import { OtpInput } from "@/app/components";
import { SecondaryHeader } from "@/app/components/Header"
import { Button, Column, Heading, Image, Text, View } from "native-base"
import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { TouchableOpacity } from "react-native";
import { useCountdown } from "usehooks-ts";

export const OtpConfirmScreen = () => {
  const { t } = useTranslation();
  const [value, controller] = useCountdown({
    countStart: 60,
    countStop: 0,
  });

  useEffect(() => {
    controller.startCountdown();
  }, [])

  const onResend = () => {
    controller.resetCountdown();
  }

  return <Column flex={1}>
    <SecondaryHeader />
    <View p={4} pt={0}>
      <Heading size="lg">{t("Phone Validate")}</Heading>
    </View>

    <Image alt="" source={Images.OtpValidate} style={{ objectFit: 'contain' }} height={120} />
    <Heading size="lg" textAlign="center" mt={8}>{t("OTP Authentication")}</Heading>
    <Text textAlign="center" color="text.placeholder" px={10} mt={2}>
      {t("Please enter the OTP code that has just been sent to your phone number")}
      <Text bold> ********678</Text>
    </Text>
    <View my="auto">
      <Heading color="text.link" size="md" textAlign="center">{value} s</Heading>
      <OtpInput pinCount={6} px={10} containerProps={{ padding: 10 }} />
      <Text textAlign="center">
        {t("Didn't receive the code? ")}
        <TouchableOpacity onPress={onResend}>
          <Text color="text.link" bold>{t("Resend")}</Text>
        </TouchableOpacity>
      </Text>
    </View>

    <View px={4} mt="auto">
      <Button size="lg">
        {t("Confirm")}
      </Button>
    </View>
  </Column>
}
