import { Paper, Button } from "@mui/material";
import { Formik, Form } from "formik";
import EcrimeFormStepper from "./EcrimeFormStepper";
import { initialValues } from "./utils/initialValues";
import { validationSchema } from "./utils/validationSchema";
import EcrimeFormFields from "./EcrimeFormFields";
import { EcrimeFormValues } from "./types/EcrimeForm.type";

const EcrimeForm = () => {
  const handleSubmit = (values: EcrimeFormValues) => {
    console.log("Form values", values);
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
        {() => (
          <Form
            style={{
              marginTop: "42px",
            }}
          >
            <EcrimeFormFields />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default EcrimeForm;
