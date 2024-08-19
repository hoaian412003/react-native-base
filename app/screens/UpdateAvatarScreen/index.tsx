import { Images } from "@/app/assets";
import { Camera } from "@/app/components";
import { SecondaryHeader } from "@/app/components/Header"
import { CameraCapturedPicture, CameraView } from "expo-camera";
import { Box, Column, Image, Progress, Text } from "native-base"
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"
import { TouchableOpacity } from "react-native";
import { ConfirmImage } from "./components/ConfirmImage";
import BottomSheet from "@gorhom/bottom-sheet";

export const UpdateAvatarScreen = () => {
  const ref = useRef<CameraView>(null);
  const { t } = useTranslation();
  const [image, setImage] = useState<CameraCapturedPicture>();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const onCapture = async () => {
    const image = await ref.current?.takePictureAsync();
    setImage(image);
    bottomSheetRef.current?.expand()
  }

  return <Box flex={1} >
    <SecondaryHeader
      title={t("Avatar")}
    />
    <Camera ref={ref} style={{ flex: 1 }} facing="front" />
    <Column px={4} space={10} pb={10} mt={5}>
      <Text textAlign="center" color="text.placeholder">{t("Please adjust the device settings to ensure the image is clear, then press the capture button")}</Text>
      <Progress value={80} colorScheme="amber" width="50%" mx="auto" />
      <TouchableOpacity onPress={onCapture}>
        <Image alt="" source={Images.Capture} style={{ objectFit: 'contain' }} height={50} />
      </TouchableOpacity>
    </Column>
    <ConfirmImage
      onConfirm={() => {
        bottomSheetRef.current?.close();
      }}
      onReject={() => {
        bottomSheetRef.current?.close();
      }}
      ref={bottomSheetRef} source={{ uri: image?.uri }} />
  </Box>
}
