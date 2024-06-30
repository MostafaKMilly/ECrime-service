import { Field, FieldProps, ErrorMessage } from "formik";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import GenericTextField from "../../../../shared/components/GenericTextField";
import GenericSelect from "../../../../shared/components/GenericSelect";

const EcrimeFormFields = () => {
  return (
    <Stack gap="34px">
      <Box>
        <Field name="complainantType">
          {({ field }: FieldProps<string>) => (
            <GenericSelect
              {...field}
              label="Complainant Type"
              required
              fullWidth
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Private Entity">Private Entity</MenuItem>
              <MenuItem value="Local Government Entity">
                Local Government Entity
              </MenuItem>
              <MenuItem value="Federal Entity">Federal Entity</MenuItem>
            </GenericSelect>
          )}
        </Field>
        <ErrorMessage name="complainantType">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Box>

      <Stack gap="32px">
        <Box display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
            }}
          />
          <Typography variant="h2" sx={{ ml: 1 }}>
            Government Entity Details
          </Typography>
        </Box>
        <Field name="governmentEntityName">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Government Entity Name"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="governmentEntityName">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="governmentalContactNumber">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Governmental Contact Number"
              placeholder="Ex: 9714xxxxxxx"
              required
              icon={PhoneIcon}
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="governmentalContactNumber">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="fax">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Fax"
              placeholder="Ex: 9714xxxxxxx"
              icon={PhoneIcon}
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="fax">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="governmentAddress">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Government Address"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="governmentAddress">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <Box display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
            }}
          />
          <Typography variant="h2" sx={{ ml: 1 }}>
            Details of the Complainant
          </Typography>
        </Box>
        <Field name="emiratesId">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Emirates ID"
              placeholder="XXX-XXXX-XXXXXXX-X"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="emiratesId">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="complainantAddress">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Complainant Address"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="complainantAddress">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="mobileNumber">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Mobile Number"
              placeholder="971XXXXXXXXX"
              required
              icon={PhoneIcon}
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="mobileNumber">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="email">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Email"
              placeholder="Ex: xyz@xyz.com"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="email">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <Box display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
            }}
          />
          <Typography variant="h2" sx={{ ml: 1 }}>
            Details of the Complaint
          </Typography>
        </Box>
        <Field name="details">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Details"
              multiline
              rows={4}
              placeholder="(Maximum limit: 2000 characters)"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="details">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field name="relation">
          {({ field }: FieldProps<string>) => (
            <GenericTextField
              {...field}
              label="Relation between you and the Accused?"
              required
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="relation">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <Box display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
            }}
          />
          <Typography variant="h2" sx={{ ml: 1 }}>
            Attachments
          </Typography>
        </Box>
        <Typography variant="body2">
          File Size limit for PDF, DOC, DOCX, XLSX is 2 MB whereas for JPG, JPEG
          and PNG it is 5 MB. Uploaded file must be of type pdf, gif, jpg, jpeg,
          png
        </Typography>

        <Field name="file">
          {({ form }: FieldProps<string>) => (
            <GenericTextField
              type="file"
              onChange={(event) => {
                const file = (event.currentTarget as HTMLInputElement)
                  .files?.[0];
                form.setFieldValue("file", file);
              }}
              label="Attachments"
              fullWidth
            />
          )}
        </Field>
        <ErrorMessage name="file">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <Box display="flex" alignItems="center">
          <AccountCircleIcon
            sx={{
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
            }}
          />
          <Typography variant="h2" sx={{ ml: 1 }}>
            Financial Losses
          </Typography>
        </Box>
        <FormControlLabel
          control={
            <Field name="financialLosses" type="checkbox" as={Checkbox} />
          }
          label="Are there any financial losses?"
        />
        <ErrorMessage name="financialLosses">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <FormControlLabel
          control={<Field name="acceptTerms" type="checkbox" as={Checkbox} />}
          label="Accept terms"
        />
        <ErrorMessage name="acceptTerms">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <Field name="captcha">
          {({ field }: FieldProps<string>) => (
            <GenericSelect
              {...field}
              label="Select captcha image"
              required
              fullWidth
            >
              <MenuItem value="captcha1">Captcha 1</MenuItem>
              <MenuItem value="captcha2">Captcha 2</MenuItem>
              <MenuItem value="captcha3">Captcha 3</MenuItem>
              <MenuItem value="captcha4">Captcha 4</MenuItem>
              <MenuItem value="captcha5">Captcha 5</MenuItem>
            </GenericSelect>
          )}
        </Field>
        <ErrorMessage name="captcha">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>
    </Stack>
  );
};

export default EcrimeFormFields;
