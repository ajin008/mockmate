import React from "react";
import {
  FormControl,
  FormDescription,
  FormField as ShadFormField, // Renamed to avoid conflict
  FormItem,
  FormMessage,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { Controller, Control, Path, FieldValues } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            type={type}
            placeholder={placeholder}
            {...field}
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
