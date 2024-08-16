import React from 'react';
import { Center, Text, Image, Heading, Column, Input, Flex, Button, View } from 'native-base';
import { Images } from '@/app/assets';
import { useTranslation } from 'react-i18next';
import { PasswordInput } from '@/app/components';
import { TouchableOpacity } from 'react-native';

export const LoginScreen = () => {
  const { t } = useTranslation();
  return <Column flex={1} padding={4} alignItems="center">
    <Image alt="" source={Images.Logo} style={{ objectFit: 'contain' }} width={200} />
    <Heading size="lg">{t("Login")}</Heading>

    <Column width="full" style={{ gap: 8, marginTop: 20 }}>
      <Input placeholder={t("Phone/Email")} />
      <PasswordInput placeholder={t("Password")} />
    </Column>
    <Flex mt={2} width="full">
      <TouchableOpacity>
        <Text textAlign="right">
          {t("Forgot password ?")}
        </Text>
      </TouchableOpacity>
    </Flex>
    <Button size="lg" mt={10}>{t("Login")}</Button>
    <View mt="auto" mb="10">
      <Text color="text.primary">{t("Don't have account ? ")}
        <TouchableOpacity>
          <Text color="text.link" fontWeight={600}>{t("Register now")}</Text>
        </TouchableOpacity>
      </Text>
    </View>
  </Column>
}
