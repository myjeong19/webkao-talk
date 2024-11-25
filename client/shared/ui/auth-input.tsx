import { type TextInputProps, View, Text } from 'react-native';
import { Input } from '~/rnr/ui';
import {
  Controller,
  type Control,
  type FieldValues,
  type PathValue,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';
import { ReactElement } from 'react';

type AuthInputProps<TFieldValues extends FieldValues> = {
  errorMessage?: string;
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
} & TextInputProps & {
    render?: (props: {
      field: {
        onChange: (value: PathValue<TFieldValues, Path<TFieldValues>>) => void;
        onBlur: () => void;
        value: PathValue<TFieldValues, Path<TFieldValues>>;
      };
    }) => ReactElement;
  } & {
    rules?:
      | Omit<
          RegisterOptions<TFieldValues, Path<TFieldValues>>,
          'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
        >
      | undefined;
  };

export function AuthInput<TFieldValues extends FieldValues>({
  className = '',
  'aria-labelledby': ariaLabelledby,
  placeholder,
  secureTextEntry = false,
  control,
  name,
  rules,
  errorMessage,
  render,
}: AuthInputProps<TFieldValues>) {
  return (
    <View className={`${className} `}>
      {control && (
        <Controller
          rules={rules}
          control={control}
          name={name}
          render={
            render ||
            (({ field: { onChange, onBlur, value } }) => (
              <Input
                className="border-b-2 border-slate-300"
                aria-labelledby={ariaLabelledby}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            ))
          }
        />
      )}
      {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
    </View>
  );
}
