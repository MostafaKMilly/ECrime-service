import React from "react";
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
import {
  FormField,
  FormSelect,
  RadioField,
} from "../../../../shared/components";
import { Accused } from "./types/Accused.type";
import { accusedFormValidationSchema } from "./utils/accusedFormValidationSchema";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WebsiteDetailsForm from "./WebsiteDetailsForm";

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
  websiteDetails: false,
  websites: [],
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
              <Stack spacing={4}>
                <FormField
                  name="fullName"
                  label="Full Name"
                  required
                  icon={PersonOutlinedIcon}
                />
                <FormSelect name="nationality" label="Nationality" required>
                  <MenuItem value="UAE">UNITED ARAB EMIRATES</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </FormSelect>
                <FormSelect name="gender" label="Gender" required>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </FormSelect>
                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="legend"
                    sx={{ maxWidth: "22%" }}
                  >
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
                  icon={PersonOutlinedIcon}
                />
                <FormField
                  name="email"
                  label="Email"
                  required
                  icon={MailOutlineIcon}
                />
                <RadioField
                  label="Website Details"
                  name="websiteDetails"
                  options={[
                    {
                      label: "Yes",
                      value: true,
                    },
                    {
                      label: "No",
                      value: false,
                    },
                  ]}
                />
                {values.websiteDetails && (
                  <WebsiteDetailsForm websites={values.websites} />
                )}
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="outlined" color="secondary">
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
