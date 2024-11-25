import { Link, type LinkProps } from 'expo-router';

export function AuthLink({ className, href, children }: LinkProps) {
  return (
    <Link className={`${className} text-gray-500`} href={href}>
      {children}
    </Link>
  );
}
