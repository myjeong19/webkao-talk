import { Link } from 'react-router-dom';
import { Button } from '../shadcn/ui';

type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
};

export function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}
