import { Button, Text, type ButtonProps } from '~/rnr/ui';

export function AuthButton({ children, onPress }: ButtonProps) {
  return (
    <Button className="w-8/12 bg-teal-700 p-3 rounded mb-3" onPress={onPress}>
      {typeof children === 'string' && <Text className="text-white text-center">{children}</Text>}
    </Button>
  );
}
