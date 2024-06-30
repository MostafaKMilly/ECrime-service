import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Chip, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header: React.FC = () => {
  const [showSection, setShowSection] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setShowSection(window.scrollY <= 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          background: "white",
          boxShadow: showSection ? "none" : "0 4px 8px rgba(0, 0, 0, 0.04)",
          px: { xs: "24px", md: "32px" },
          pt: "24px",
          pb: { xs: "24px", md: "8px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="/images/dubai-police-org.svg"
                alt="Dubai Police"
                height="32"
              />
              <IconButton edge="end" color="inherit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </>
          ) : (
            <>
              <a
                href="https://www.digitaldubai.ae/en/home-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/government-of-dubai-red.svg"
                  alt="Government of Dubai"
                  height="64"
                />
              </a>
              <a href="/wps/portal/home">
                <img
                  src="/images/dubai-police-org.svg"
                  alt="Dubai Police"
                  height="44"
                />
              </a>
            </>
          )}
        </Box>
      </Toolbar>
      {!isMobile && (
        <Box
          sx={{
            maxHeight: "200px",
            opacity: showSection ? 1 : 0,
            visibility: showSection ? "visible" : "hidden",
            transition:
              "max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease",
            overflow: "hidden",
          }}
        >
          <Toolbar sx={{ px: "32px", background: "white" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box display={{ xs: "none", lg: "flex" }}>
                  {[
                    "Home",
                    "About Us",
                    "Open Data",
                    "Application Status",
                    "Help & Support",
                  ].map((text) => (
                    <MenuButton
                      key={text}
                      color="inherit"
                      sx={{ fontSize: "16px", fontWeight: "normal" }}
                    >
                      {text}
                    </MenuButton>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Chip icon={<SearchIcon />} label="Search..." clickable />
                <Chip icon={<AccessibleIcon />} clickable />
                <Chip label="العربية" clickable />
                <Chip
                  label="Login"
                  icon={<AccountCircleOutlinedIcon />}
                  clickable
                />
              </Box>
            </Box>
          </Toolbar>
        </Box>
      )}
    </AppBar>
  );
};

const MenuButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: 0,
    left: "-100%",
    backgroundColor: theme.palette.primary.main,
    transition: "left 0.3s ease-in-out",
  },
  "&:hover": {
    background: "transparent",
  },
  "&:hover::before": {
    left: 0,
  },
}));

export default Header;
