import { Paper, Button, Box } from "@mui/material";
import { Formik, Form } from "formik";
import EcrimeFormStepper from "./EcrimeFormStepper";
import { initialValues } from "./utils/initialValues";
import { validationSchema } from "./utils/validationSchema";
import EcrimeFormFields from "./EcrimeFormFields";
import { EcrimeFormValues } from "./types/EcrimeForm.type";
import { formatFormValue } from "../../../../shared/utils/formatFormValues";

const EcrimeForm = () => {
  const handleSubmit = (values: EcrimeFormValues) => {
    console.log("Form values", formatFormValue(values));
  };

  return (
    <Paper
      sx={{
        borderRadius: "22px",
        backgroundColor: { xs: "transparent", md: "white" },
        boxShadow: { xs: "none", md: "0 19px 31px 0 rgba(0,0,0,0.11)" },
        p: {
          xs: "24px",
          md: "50px",
        },
        pt: {
          xs: "0px",
          md: "50px",
        },
        width: "100%",
        maxWidth: "896px",
        margin: "0 auto 30px auto",
      }}
    >
      <EcrimeFormStepper />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form
            style={{
              marginTop: "42px",
            }}
          >
            <EcrimeFormFields />
            <Box display={"flex"} alignItems={"center"} gap={"8px"} mt={4}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => resetForm()}
              >
                Clear
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default EcrimeForm;
