import React, { useEffect } from "react";
import { Field, FieldProps, getIn, useFormikContext } from "formik";
import { MenuItem, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputMask from "react-input-mask";
import {
  FormField,
  FormSelect,
  GenericTextField,
  RadioField,
  SectionHeader,
} from "../../../../shared/components";
import { EcrimeFormValues } from "./types/EcrimeForm.type";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const EcrimeFormPersonal: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<EcrimeFormValues>();

  useEffect(() => {
    setFieldValue("personal.hasIdentity", true);
  }, [setFieldValue]);

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Personal" />

      <RadioField
        name="personal.hasIdentity"
        label="Do you have Identity?"
        options={[
          { value: "true", label: "Yes" },
          { value: "false", label: "No" },
        ]}
        row
        defaultChecked
        onChange={(value) =>
          setFieldValue("personal.hasIdentity", value === "true")
        }
      />

      {values.personal?.hasIdentity && (
        <>
          <Field name="personal.emiratesId">
            {({ field, form }: FieldProps<string>) => (
              <InputMask
                {...field}
                mask="999-9999-9999999-9"
                maskChar={null}
                onChange={(e: { target: { value: string } }) =>
                  form.setFieldValue("personal.emiratesId", e.target.value)
                }
              >
                {
                  (() => {
                    return (
                      <GenericTextField
                        label="Emirates ID"
                        placeholder="XXX-XXXX-XXXXXXX-X"
                        required
                        fullWidth
                        icon={CreditCardOutlinedIcon}
                        error={Boolean(
                          getIn(form.errors, "personal.emiratesId") &&
                            getIn(form.touched, "personal.emiratesId")
                        )}
                        helperText={
                          getIn(form.errors, "personal.emiratesId") &&
                          getIn(form.touched, "personal.emiratesId")
                            ? (getIn(
                                form.errors,
                                "personal.emiratesId"
                              ) as string)
                            : ""
                        }
                      />
                    );
                  }) as unknown as React.ReactNode
                }
              </InputMask>
            )}
          </Field>
          <FormField
            name="personal.address"
            label="Address"
            required
            icon={ImportContactsOutlinedIcon}
          />
        </>
      )}

      {!values.personal?.hasIdentity && (
        <>
          <FormField
            name="personal.firstName"
            label="First Name"
            required
            icon={PersonOutlineOutlinedIcon}
          />
          <FormField
            name="personal.middleName"
            label="Middle Name"
            icon={PersonOutlineOutlinedIcon}
          />
          <FormField
            name="personal.surname"
            label="Surname"
            required
            icon={PersonOutlineOutlinedIcon}
          />
          <FormSelect name="personal.gender" label="Gender" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>

          <FormSelect name="personal.nationality" label="Nationality" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="uae">UAE</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>

          <FormField
            name="personal.dateOfBirth"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            required
            type="date"
          />
          <FormField
            name="personal.passportNo"
            label="Passport No"
            required
            icon={ImportContactsOutlinedIcon}
          />
          <FormField
            name="personal.address"
            label="Address"
            required
            icon={ImportContactsOutlinedIcon}
          />
        </>
      )}
    </Stack>
  );
};

export default EcrimeFormPersonal;
