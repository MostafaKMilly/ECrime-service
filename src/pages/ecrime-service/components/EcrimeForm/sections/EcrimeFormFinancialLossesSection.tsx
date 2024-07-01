import React from "react";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useFormikContext } from "formik";
import {
  FormField,
  RadioField,
  SectionHeader,
  AutoCompleteField,
} from "../../../../../shared/components";
import { EcrimeFormValues } from "../types/EcrimeForm.type";

const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "PayPal",
  "Bank Transfer",
  "Cash",
];

const EcrimeFormFinancialLossesSection: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Financial Losses" />
      <RadioField
        name="financialLosses"
        label="Are there any financial losses?"
        options={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
      />

      {values.financialLosses && (
        <>
          <FormField
            name="actualLosses"
            label="Actual losses"
            placeholder="Actual losses"
            required
          />
          <FormField
            name="approximateLosses"
            label="Approximate (Possible) losses"
            placeholder="Approximate (Possible) losses"
          />
          <AutoCompleteField
            name="paymentMethod"
            label="Payment Methods"
            options={paymentMethods}
            required
          />
        </>
      )}
    </Stack>
  );
};

export default EcrimeFormFinancialLossesSection;
