import { Formik, Form, FormikHelpers, useFormikContext } from "formik";
import { Box, Button, Stack, Typography, MenuItem } from "@mui/material";
import { FormField, FormSelect } from "../../../../shared/components";
import { Accused, Website } from "./types/Accused.type";
import { websiteDetailsValidationSchema } from "./utils/websiteDetailsValidationSchema";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

interface WebsiteDetailsFormProps {
  websites: Website[];
}

const WebsiteDetailsForm: React.FC<WebsiteDetailsFormProps> = ({
  websites,
}) => {
  const { values, setFieldValue } = useFormikContext<Accused>();

  const handleSubmit = (
    values: Website,
    { resetForm }: FormikHelpers<Website>
  ) => {
    setFieldValue("websites", [...websites, values]);
    resetForm();
  };

  const handleDeleteWebsite = (index: number) => {
    const updatedWebsites = values.websites.filter((_, i) => i !== index);
    setFieldValue("websites", updatedWebsites);
  };

  return (
    <Stack pb={2}>
      <Stack direction={"row"} gap={1} alignItems={"end"}>
        <LanguageIcon />
        <Typography variant="h3">Website Details</Typography>
      </Stack>
      <Box
        sx={{
          border: "3px dashed #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Formik
          initialValues={{
            type: "",
            name: "",
            url: "",
            note: "",
          }}
          validationSchema={websiteDetailsValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, submitForm }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  "& .MuiTypography-root": {
                    mr: "60px",
                  },
                }}
              >
                <FormSelect
                  name="type"
                  label="Type"
                  required
                  value={values.type}
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value="Website">Website</MenuItem>
                  <MenuItem value="Social Media">Social Media</MenuItem>
                  <MenuItem value="Communication App">
                    Communication App
                  </MenuItem>
                  <MenuItem value="Mobile App">Mobile App</MenuItem>
                </FormSelect>
                <FormField
                  sx={{ width: "80%", ml: "auto" }}
                  name="name"
                  label=""
                  value={values.name}
                  icon={PersonOutlinedIcon}
                  onChange={handleChange}
                />
              </Stack>
              <FormField
                name="url"
                label="URL"
                required
                value={values.url}
                icon={LanguageIcon}
                onChange={handleChange}
              />
              <FormField
                name="note"
                label="Note"
                required
                value={values.note}
                icon={NoteAltOutlinedIcon}
                multiline
                maxRows={6}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "fit-content", ml: 15, mt: 2 }}
                onClick={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
              >
                <AddIcon />
              </Button>
            </Form>
          )}
        </Formik>
        {values.websites.length > 0 && (
          <Stack sx={{ mt: 2 }} direction={"row"} gap={2}>
            <Typography variant="subtitle1" sx={{ minWidth: "fit-content" }}>
              Website Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {values.websites.map((website, index) => (
                <Stack gap={1}>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      alignItems: "baseline",
                    }}
                  >
                    <Stack gap={1}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LanguageIcon />
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {website.type}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <LanguageIcon />
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {website.url}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <NoteAltOutlinedIcon />
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {website.note}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <PersonOutlinedIcon />
                      <Typography
                        variant="body2"
                        sx={{
                          maxWidth: "150px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {website.name}
                      </Typography>
                    </Stack>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "fit-content", ml: 0, mt: 2 }}
                    onClick={() => handleDeleteWebsite(index)}
                  >
                    <ClearOutlinedIcon />
                  </Button>
                </Stack>
              ))}
            </Box>
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default WebsiteDetailsForm;
