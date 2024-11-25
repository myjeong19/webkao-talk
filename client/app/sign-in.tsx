import { useEffect, useRef } from 'react';
import { type TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthButton, AuthHeader, AuthInput, AuthLink } from '~/shared/ui';

import { useSession } from '~/store/use-auth';

export default function SignIn() {
  const { signIn } = useSession();

  const idRef = useRef<TextInput>(null);

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  return (
    <SafeAreaView className="flex mt-52 items-center w-screen h-screen">
      <AuthHeader />

      <AuthInput ref={idRef} aria-labelledby="user-id" placeholder="아이디" />
      <AuthInput
        className="mb-10"
        aria-labelledby="user-password"
        placeholder="패스워드"
        secureTextEntry
      />

      <AuthButton>로그인</AuthButton>

      <AuthLink href="/sign-up">회원가입</AuthLink>
    </SafeAreaView>
  );
}
