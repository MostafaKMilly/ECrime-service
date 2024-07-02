import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TermsAndConditionsDialogProps {
  open: boolean;
  onClose: () => void;
}

const TermsAndConditionsDialog: React.FC<TermsAndConditionsDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "500px",
        },
      }}
    >
      <DialogTitle>
        Terms and Conditions
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: "#008755", pb: 4 }}>
          I hereby declare that the subject matter reported is a crime
          punishable by law and falls under the jurisdiction of the Emirate of
          Dubai. I will be responsible for any misinformation that has been
          filled out in this form.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionsDialog;
