import {
  TextField as MUITextField,
  Stack,
  type TextFieldProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = TextFieldProps & {
  name: string;
};

export default function TextField({ name, ...props }: Props) {
  const { control, formState } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={formState.defaultValues?.[name]}
      control={control}
      render={({ field, fieldState }) => (
        <Stack>
          <MUITextField
            {...props}
            {...field}
            slotProps={{ input: { className: "rounded-lg border-border" } }}
            error={fieldState.invalid}
          />
          {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
        </Stack>
      )}
    />
  );
}
