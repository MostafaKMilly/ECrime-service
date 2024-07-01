import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface SectionHeaderProps {
  icon: SvgIconComponent;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => (
  <Box display="flex" alignItems="center">
    <Icon
      sx={{
        width: { xs: "30px", md: "40px" },
        height: { xs: "30px", md: "40px" },
      }}
    />
    <Typography variant="h2" sx={{ ml: 1 }}>
      {title}
    </Typography>
  </Box>
);

export default SectionHeader;
