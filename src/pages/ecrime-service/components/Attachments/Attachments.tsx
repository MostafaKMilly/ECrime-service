import React, { useCallback } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useDropzone } from "react-dropzone";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import { SectionHeader } from "../../../../shared/components";
import CancelIcon from "@mui/icons-material/Cancel";
import { EcrimeFormValues } from "../EcrimeForm/types/EcrimeForm.type";

const Attachments: React.FC = () => {
  const { setFieldValue, values } = useFormikContext<EcrimeFormValues>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFieldValue("file", acceptedFiles[0]);
    },
    [setFieldValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.ms-excel": [".xlsx"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    maxSize: 5242880, // 5MB
  });

  const handleRemoveFile = () => {
    setFieldValue("file", null);
  };

  const renderFilePreview = () => {
    if (!values.file) return null;

    const fileType = values.file.type;
    let filePreview = (
      <DescriptionIcon sx={{ fontSize: "48px", color: "#ccc" }} />
    );

    if (fileType.includes("image")) {
      filePreview = (
        <img
          src={URL.createObjectURL(values.file)}
          alt="preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      );
    } else if (fileType.includes("pdf")) {
      filePreview = (
        <PictureAsPdfIcon sx={{ fontSize: "48px", color: "#ccc" }} />
      );
    }

    return (
      <Box
        sx={{
          border: "3px dashed #ccc",
          width: "112px",
          height: "112px",
          borderRadius: "10px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",

          "&:hover .delete-button": {
            display: "block",
          },
          "&:hover .dark-filter": {
            display: "block",
          },
        }}
      >
        {filePreview}
        <Box
          className="dark-filter"
          sx={{
            display: "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: "-14px",
            right: "-16px",
            display: "none",
            zIndex: 1,
          }}
          size="small"
          onClick={handleRemoveFile}
          className="delete-button"
        >
          <CancelIcon sx={{ color: "error.main" }} />
        </IconButton>
      </Box>
    );
  };

  return (
    <Stack gap="32px">
      <SectionHeader icon={AttachFileIcon} title="Attachments" />
      <Typography variant="body2">
        File Size limit for PDF, DOC, DOCX, XLSX is 2 MB whereas for JPG, JPEG
        and PNG it is 5 MB.
        <br /> Uploaded file must be of type pdf, gif, jpg, jpeg, png
      </Typography>
      <Box display={"flex"} alignItems={"center"} gap={"16px"}>
        <Box
          {...getRootProps()}
          sx={{
            border: "3px dashed #ccc",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            position: "relative",
            width: "112px",
            height: "112px",
            borderRadius: "10px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input {...getInputProps()} />
          <AddOutlinedIcon sx={{ fontSize: "48px", color: "#ccc" }} />
        </Box>
        {values.file && (
          <Box
            sx={{
              position: "relative",
            }}
          >
            {renderFilePreview()}
          </Box>
        )}
      </Box>
      <ErrorMessage name="file">
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </Stack>
  );
};

export default Attachments;
