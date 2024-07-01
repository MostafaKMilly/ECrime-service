import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
  Typography,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import { FormField, FormSelect } from "../../../../shared/components";
import { Accused } from "./types/Accused.type";
import { accusedFormValidationSchema } from "./utils/accusedFormValidationSchema";

interface EcrimeAccusedDialogProps {
  open: boolean;
  onClose: () => void;
  onAddAccused: (accused: Accused) => void;
  onEditAccused: (accused: Accused, index: number) => void;
  initialValues?: Accused;
  editIndex?: number;
}

const defaultValues: Accused = {
  fullName: "",
  nationality: "",
  gender: "",
  presentInUAE: "",
  address: "",
  contactNo: "",
  email: "",
  websiteDetails: "",
};

const EcrimeAccusedDialog: React.FC<EcrimeAccusedDialogProps> = ({
  open,
  onClose,
  onAddAccused,
  onEditAccused,
  initialValues = defaultValues,
  editIndex,
}) => {
  const isEditMode = editIndex !== undefined;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Details of the Accused
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={accusedFormValidationSchema}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          if (isEditMode) {
            onEditAccused(values, editIndex!);
          } else {
            onAddAccused(values);
          }
          resetForm();
          onClose();
        }}
      >
        {({ values }) => (
          <Form>
            <DialogContent>
              <Stack spacing={2}>
                <FormField name="fullName" label="Full Name" required />
                <FormSelect name="nationality" label="Nationality" required>
                  <MenuItem value="UAE">UNITED ARAB EMIRATES</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </FormSelect>
                <FormSelect name="gender" label="Gender" required>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </FormSelect>
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" component="legend">
                    Accused present in the UAE?
                  </Typography>
                  <Field as={RadioGroup} name="presentInUAE" row>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                    <FormControlLabel
                      value="unknown"
                      control={<Radio />}
                      label="I don't know"
                    />
                  </Field>
                </FormControl>
                {values.presentInUAE === "yes" && (
                  <FormField name="address" label="Address" required />
                )}
                <FormField
                  name="contactNo"
                  label="Contact No"
                  placeholder="XXXXXXXXXXXX"
                  required
                />
                <FormField name="email" label="Email" required />
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" component="legend">
                    Website Details
                  </Typography>
                  <Field as={RadioGroup} name="websiteDetails" row>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </Field>
                </FormControl>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {isEditMode ? "Save Changes" : "Add Accused"}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default EcrimeAccusedDialog;
