import { useReducer } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { UseFormReturn, FieldValues, Path } from 'react-hook-form';

type MoneyInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
};

const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'symbol',
  currencySign: 'standard',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function MoneyInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: MoneyInputProps<T>) {
  const fieldValue = form.getValues(name);
  const initialValue: string = fieldValue ? moneyFormatter.format(fieldValue as number) : '';

  const [maskedValue, setMaskedValue] = useReducer(
    (_state: string, newValue: string): string => {
      const digits = newValue.replace(/\D/g, '');
      const numberValue = Number(digits) / 100;
      return moneyFormatter.format(numberValue);
    },
    initialValue
  );

  const handleChange = (
    onChange: (value: number) => void,
    inputValue: string
  ): void => {
    const digits = inputValue.replace(/\D/g, '');
    const numberValue = Number(digits) / 100;
    onChange(numberValue);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const originalOnChange = field.onChange;
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type='text'
                {...field}
                onChange={(e) => {
                  setMaskedValue(e.target.value);
                  handleChange(originalOnChange, e.target.value);
                }}
                value={maskedValue}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}