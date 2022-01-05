import * as React from "react";
import styles from "../styles/main.module.scss";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";

import Image from "next/image";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { title: "MISSÃO", path: "/missao" },
    { title: "QUEM SOMOS", path: "/quemsomos" },
    { title: "CRONOLOGIA", path: "/cronologia" },
  ];

  return (
    <AppBar
      position="static"
      color="background"
      sx={{
        boxShadow: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              position: "absolute",
              backgroundColor: styles.primary,
              marginBottom: "-2.5rem",
            }}
            square
            elevation={2}
          >
            <img
              src="/images/logo.png"
              alt="CLU Logo"
              className={styles.logo}
            />
          </Paper>
        </Box>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={page.path}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*DESKTOP*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={page.path}
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Typography fontWeight={600} mr={1}>
                  {page.title}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box>
            <Typography textAlign="center">icons</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
