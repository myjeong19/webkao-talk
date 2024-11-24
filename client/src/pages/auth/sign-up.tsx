import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Button,
} from '@/shared/shadcn/ui';

import { useSignupForm } from '@/features/auth/model';
import { Link } from 'react-router-dom';

function Login() {
  const { form, onSubmit } = useSignupForm();

  return (
    <>
      <header className="w-6/12 mb-16">
        <h2 className="font-semibold text-3xl">WEB KAO TALK 시작하기</h2>
        <span>회원가입</span>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-6/12 mb-5">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="w-full mb-3">
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="닉네임을 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full mb-3">
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input placeholder="아이디를 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full mb-3 mb-3">
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input placeholder="비밀번호를 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="bg-teal-600 text-white w-full hover:opacity-90" type="submit">
            회원가입
          </Button>
        </form>
      </Form>

      <p className="w-6/12 p-2">
        <span className="mr-3">사용중인 아이디가 있으신가요?</span>
        <Link className="hover:text-teal-600 hover:border-b-2 border-teal-600" to="/">
          <strong>로그인하기</strong>
        </Link>
      </p>
    </>
  );
}

export default Login;
