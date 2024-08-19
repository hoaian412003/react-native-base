import { Button, Divider, Image, Row, Text, View } from "native-base"
import { forwardRef } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetProps, BottomSheetView, useBottomSheet, useBottomSheetInternal, useBottomSheetModal, useBottomSheetModalInternal } from '@gorhom/bottom-sheet';
import { ImageSourcePropType } from "react-native";
import { useTranslation } from "react-i18next";

type Props = {
  source: ImageSourcePropType
  onConfirm: () => void;
  onReject: () => void;
} & Omit<BottomSheetProps, 'children'>;

export const ConfirmImage = forwardRef<BottomSheet, Props>(({
  source,
  ...props
}, ref) => {

  const { t } = useTranslation();

  return <BottomSheet index={-1} ref={ref} backdropComponent={
    (props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
  } snapPoints={["50%"]} {...props}>
    <BottomSheetView style={{ flex: 1 }}>
      <Image alt="" source={source} style={{ objectFit: 'contain' }} height={160} mt={5} />
      <Text textAlign="center" p={10}>{t("This image will be used for your gym membership. Do you agree?")}</Text>
      <Divider mt="auto" />
      <Row px={4} space={4} mt="4">
        <Button flex={1} size="lg" variant="outline" onPress={props.onReject}>{t("Reshoot")}</Button>
        <Button flex={1} size="lg" onPress={props.onConfirm}>{t("Accept")}</Button>
      </Row>
    </BottomSheetView>
  </BottomSheet>
})
