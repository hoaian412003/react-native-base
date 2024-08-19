import { Images } from "@/app/assets"
import { useCameraPermissions } from "expo-camera"
import { openSettings } from "expo-linking"
import { Button, Column, Heading, IBoxProps, Image, Text } from "native-base"
import { useTranslation } from "react-i18next"

type Props = {} & IBoxProps

export const CameraPermssions: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const [permission, requestPermssions] = useCameraPermissions();


  const onRequestPermissions = () => {
    if (permission?.canAskAgain) {
      requestPermssions();
    } else {
      openSettings()
    }
  }

  return <Column {...props}>
    <Image alt="" source={Images.Camera} style={{ objectFit: 'contain' }} height={50} />
    <Heading textAlign="center" mt={2} size="lg">{t("Allow Access to Camera")}</Heading>
    <Text fontSize={18} color="text.placeholder" textAlign="center">{t("This will help you use camera to give photo to our app")}</Text>
    <Button onPress={onRequestPermissions} mt="auto" size="lg">{t("Allow")}</Button>
  </Column>
}
