import { LegacyRef } from 'react';
import { type TextInput, type TextInputProps, View } from 'react-native';
import { Input } from '~/rnr/ui';

type AuthInputProps = {
  ref?: React.LegacyRef<TextInput> | undefined;
} & TextInputProps;

export function AuthInput({
  ref,
  className,
  'aria-labelledby': ariaLabelledby,
  placeholder,
  secureTextEntry = false,
}: AuthInputProps) {
  return (
    <View className={` ${className} w-8/12 border-b-2 border-slate-300`}>
      <Input
        ref={ref}
        aria-labelledby={ariaLabelledby}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
