import { useState } from "react";
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useFormikContext } from "formik";
import { Accused } from "./types/Accused.type";
import EcrimeAccusedDialog from "./EcrimeAccusedDialog";
import { SectionHeader } from "../../../../shared/components";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { EcrimeFormValues } from "../EcrimeForm/types/EcrimeForm.type";

const EcrimeAccusedDetails: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<EcrimeFormValues>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const [initialValues, setInitialValues] = useState<Accused | undefined>(
    undefined
  );

  const handleAddAccused = (accused: Accused) => {
    const updatedList = [...(values.accusedList || []), accused];
    setFieldValue("accusedList", updatedList);
  };

  const handleEditAccused = (accused: Accused, index: number) => {
    const updatedList = values.accusedList.map((item, i) =>
      i === index ? accused : item
    );
    setFieldValue("accusedList", updatedList);
  };

  const handleDeleteAccused = (index: number) => {
    const updatedList = values.accusedList.filter((_, i) => i !== index);
    setFieldValue("accusedList", updatedList);
  };

  const openEditDialog = (index: number) => {
    setEditIndex(index);
    setInitialValues(values.accusedList[index]);
    setDialogOpen(true);
  };

  return (
    <Stack gap="32px">
      <SectionHeader icon={PersonSearchIcon} title="Details of the Accused" />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setInitialValues(undefined);
          setEditIndex(undefined);
          setDialogOpen(true);
        }}
      >
        Details of the Accused
      </Button>
      <EcrimeAccusedDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAddAccused={handleAddAccused}
        onEditAccused={handleEditAccused}
        initialValues={initialValues}
        editIndex={editIndex}
      />
      {values.accusedList.length > 0 && (
        <Table>
          <TableHead sx={{ backgroundColor: "#f2f4f8", borderRadius: "8px" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.accusedList.map((accused, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{accused.fullName}</TableCell>
                <TableCell>{accused.nationality}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteAccused(index)}
                    sx={{ mr: 1 }}
                    size="small"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => openEditDialog(index)}
                    size="small"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Stack>
  );
};

export default EcrimeAccusedDetails;
