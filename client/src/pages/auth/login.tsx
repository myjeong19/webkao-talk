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

import { useLoginForm } from '@/features/auth/model';
import { Link } from 'react-router-dom';

function Login() {
  const { form, onSubmit } = useLoginForm();

  return (
    <>
      <header className="w-6/12 mb-16">
        <h2 className="font-semibold text-3xl">WEB KAO TALK 시작하기</h2>
        <span>로그인</span>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-6/12 mb-5">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="w-full h-24">
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input placeholder="아이디를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full h-24 mb-3">
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input placeholder="비밀번호를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button className="bg-teal-600 text-white w-full hover:opacity-90" type="submit">
            로그인
          </Button>
        </form>
      </Form>

      <p className="w-6/12 p-2">
        <span className="mr-3">아직 아이디가 없으신가요?</span>
        <Link className="hover:text-teal-600 hover:border-b-2 border-teal-600" to="/signup">
          <strong>회원가입하기</strong>
        </Link>
      </p>
    </>
  );
}

export default Login;
