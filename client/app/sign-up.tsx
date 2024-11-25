import { useEffect, useRef } from 'react';
import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/rnr/ui';

import { AuthButton, AuthHeader, AuthInput, AuthLink } from '~/shared/ui';

export default function SignIn() {
  const idRef = useRef<TextInput>(null);

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  return (
    <SafeAreaView className="flex mt-52 items-center w-screen h-screen relative">
      <AuthHeader />

      <View className="mb-10">
        <Text className="font-bold">아이디</Text>

        <AuthInput
          className="w-8/12"
          ref={idRef}
          aria-labelledby="user-id"
          placeholder="아이디를 입력해주세요."
        />
      </View>

      <View>
        <Text className="font-bold">비밀번호</Text>

        <AuthInput
          className="w-8/12"
          aria-labelledby="user-password"
          placeholder="비밀번호를 입력해주세요."
        />

        <AuthInput
          className="w-8/12 mb-10"
          aria-labelledby="user-password"
          placeholder="비밀번호를 확인 해주세요."
        />
      </View>

      <AuthButton>KAOTALK 회원가입</AuthButton>

      <AuthLink href="/sign-in">로그인</AuthLink>
    </SafeAreaView>
  );
}
