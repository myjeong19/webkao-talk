import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router, useRouter } from 'expo-router';
import ky from 'ky';

import { AuthButton, AuthHeader, AuthInput, AuthLink } from '~/shared/ui';

import { useSession } from '~/store/use-auth';
import { EXPO_API_URL } from '~/constants';

export default function SignIn() {
  const { signIn } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: '',
      userPassword: '',
    },
  });

  const onSignin = async (data: { userId: string; userPassword: string }) => {
    try {
      const response = await ky.post(EXPO_API_URL + 'api/users/login', {
        json: {
          username: data.userId,
          password: data.userPassword,
        },
      });

      if (response.ok) {
        const result = response.json();
        result.then(token => {
          console.log(token);
        });
        signIn('sign');
        router.replace('/explore');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="flex mt-52 items-center w-screen h-screen">
      <AuthHeader />

      <AuthInput
        control={control}
        name="userId"
        aria-labelledby="user-id"
        placeholder="아이디"
        className="w-8/12"
      />
      <AuthInput
        control={control}
        name="userPassword"
        className="mb-10 w-8/12"
        aria-labelledby="user-password"
        placeholder="패스워드"
        secureTextEntry
      />

      <AuthButton onPress={handleSubmit(onSignin)}>로그인</AuthButton>

      <AuthLink href="/sign-up">회원가입</AuthLink>
    </SafeAreaView>
  );
}
