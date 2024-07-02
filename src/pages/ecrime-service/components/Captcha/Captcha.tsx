import React from "react";
import { useField, useFormikContext } from "formik";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ChatIcon from "@mui/icons-material/Chat";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Captcha: React.FC = () => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField("captcha");
  const error = meta.touched && meta.error;

  const handleIconClick = (icon: string) => {
    setFieldValue("captcha", icon);
  };

  const icons = [
    {
      name: "airplane",
      component: <AirplanemodeActiveIcon fontSize="large" />,
    },
    { name: "chat", component: <ChatIcon fontSize="large" /> },
    { name: "fingerprint", component: <FingerprintIcon fontSize="large" /> },
    { name: "calendar", component: <CalendarTodayIcon fontSize="large" /> },
    { name: "camera", component: <CameraAltIcon fontSize="large" /> },
  ];

  const toolsIcons = [
    { name: "rotate", component: <RotateRightIcon fontSize="small" /> },
    { name: "volume", component: <VolumeUpIcon fontSize="small" /> },
  ];

  return (
    <Box
      display="flex"
      alignItems={{
        xs: "start",
        md: "baseline",
      }}
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ columnGap: "24px", width: "100%" }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{
          width: {
            xs: "100%",
            md: "22%",
          },
        }}
      >
        Select captcha image
        <span style={{ color: "red" }}>*</span>
      </Typography>

      <Stack gap={1}>
        <Typography gutterBottom>
          Select{" "}
          <Typography component="span" color="green">
            Chat Icon
          </Typography>
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <Stack
            direction="row"
            gap={2}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {icons.map((icon) => (
              <IconButton
                key={icon.name}
                onClick={() => handleIconClick(icon.name)}
                sx={{
                  backgroundColor:
                    field.value === icon.name ? "green" : "#f1f1f1",
                  borderRadius: "4px",
                  color: field.value === icon.name ? "white" : "#585858",
                  "&:hover": {
                    backgroundColor:
                      field.value === icon.name
                        ? "green"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {icon.component}
              </IconButton>
            ))}
          </Stack>
          <Stack direction="row" gap={2} alignItems={"center"}>
            {toolsIcons.map((icon) => (
              <IconButton
                key={icon.name}
                sx={{
                  backgroundColor: "rgb(44,62,80)",
                  borderRadius: "50%",
                  color: "white",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {icon.component}
              </IconButton>
            ))}
          </Stack>
        </Stack>
        {error && (
          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Captcha;
