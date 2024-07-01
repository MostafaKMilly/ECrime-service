import { Field, FieldProps, getIn } from "formik";
import InputMask from "react-input-mask";
import GenericTextField from "./GenericTextField";

interface InputMaskFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
  mask: string;
}

const InputMaskField: React.FC<InputMaskFieldProps> = ({
  name,
  label,
  placeholder,
  required,
  icon: IconComponent,
  mask,
}) => (
  <Field name={name}>
    {({ field, form }: FieldProps<string>) => (
      <InputMask
        {...field}
        mask={mask}
        maskChar={null}
        onChange={(e: { target: { value: string } }) =>
          form.setFieldValue(name, e.target.value)
        }
      >
        {
          (() => (
            <GenericTextField
              label={label}
              placeholder={placeholder}
              required={required}
              fullWidth
              icon={IconComponent}
              error={Boolean(
                getIn(form.errors, name) && getIn(form.touched, name)
              )}
              helperText={
                getIn(form.errors, name) && getIn(form.touched, name)
                  ? (getIn(form.errors, name) as string)
                  : ""
              }
            />
          )) as unknown as React.ReactNode
        }
      </InputMask>
    )}
  </Field>
);

export default InputMaskField;
