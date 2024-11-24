import { Button } from '../shadcn/ui';

type AuthButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function AuthButton({ className, children }: AuthButtonProps) {
  return (
    <Button
      className={`${className ? className : 'bg-teal-600 text-white w-full hover:opacity-90'}`}
      type="submit"
    >
      {children}
    </Button>
  );
}
