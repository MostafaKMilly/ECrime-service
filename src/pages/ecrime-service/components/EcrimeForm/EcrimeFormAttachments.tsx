import { Box, Stack, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Field, FieldProps, ErrorMessage } from "formik";
import GenericTextField from "../../../../shared/components/GenericTextField";
import { SectionHeader } from "../../../../shared/components";

const EcrimeFormAttachments: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AttachFileIcon} title="Attachments" />
    <Typography variant="body2">
      File Size limit for PDF, DOC, DOCX, XLSX is 2 MB whereas for JPG, JPEG and
      PNG it is 5 MB. Uploaded file must be of type pdf, gif, jpg, jpeg, png
    </Typography>
    <Box>
      <Field name="file">
        {({ form }: FieldProps<string>) => (
          <GenericTextField
            type="file"
            onChange={(event) => {
              const file = (event.currentTarget as HTMLInputElement).files?.[0];
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
    </Box>
  </Stack>
);

export default EcrimeFormAttachments;
