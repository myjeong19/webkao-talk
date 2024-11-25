import { View, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import ky from 'ky';
import { useForm } from 'react-hook-form';

import { Text } from '~/rnr/ui';

import { AuthButton, AuthHeader, AuthInput, AuthLink } from '~/shared/ui';
import { EXPO_API_URL } from '~/constants';

interface ApiError extends Error {
  response?: {
    status: number;
    json(): Promise<{ message: string }>;
  };
}

export default function SignUp() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: '',
      userPassword: '',
      confirmPassword: '',
    },
  });

  const password = watch('userPassword');
  const router = useRouter();

  const onSignUp = async (data: { userId: string; userPassword: string }) => {
    try {
      const response = await ky.post(EXPO_API_URL + 'api/users/signup', {
        json: {
          username: data.userId,
          password: data.userPassword,
        },
      });

      if (response.ok) {
        return router.replace('/sign-in');
      }
    } catch (error) {
      const apiError = error as ApiError;

      if (apiError.response) {
        try {
          const errorBody = await apiError.response.json();
          console.error('Signup Error:', {
            status: apiError.response.status,
            message: errorBody.message,
          });
        } catch (parseError) {
          console.error('Error parsing error response', parseError);
        }
      } else {
        console.error('Unexpected error during signup:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex justify-center items-center w-screen h-full relative "
    >
      <AuthHeader />

      <View className="w-8/12 mb-10">
        <Text className="font-bold">아이디</Text>

        <AuthInput
          control={control}
          name="userId"
          className=""
          aria-labelledby="user-id"
          placeholder="아이디"
        />
      </View>

      <View className="w-8/12">
        <Text className="font-bold">비밀번호</Text>

        <AuthInput
          control={control}
          name="userPassword"
          aria-labelledby="user-password"
          secureTextEntry
          placeholder="비밀번호"
          rules={{
            required: '비밀번호를 입력해주세요.',
          }}
          errorMessage={errors.userPassword?.message}
        />

        <AuthInput
          control={control}
          name="confirmPassword"
          className=" mb-10"
          aria-labelledby="user-password"
          secureTextEntry
          placeholder="비밀번호를 확인"
          rules={{
            required: '비밀번호를 확인해주세요.',
            validate: value => value === password || '비밀번호가 일치하지 않습니다.',
          }}
          errorMessage={errors.confirmPassword?.message}
        />
      </View>

      <AuthButton onPress={handleSubmit(onSignUp)}>KAOTALK 회원가입</AuthButton>

      <AuthLink href="/sign-in">로그인</AuthLink>
    </KeyboardAvoidingView>
  );
}
