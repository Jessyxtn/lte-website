import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from "@mui/icons-material/Email";
import logo from '../assets/logo.png';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          width: "100%",
          height: "40px",
          bgcolor: "primary.main",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            sx={{
              "&:focus": { outline: "none" },
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <InstagramIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            sx={{
              "&:focus": { outline: "none" },
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <FacebookIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            sx={{
              "&:focus": { outline: "none" },
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <WhatsAppIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            sx={{
              "&:focus": { outline: "none" },
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <EmailIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
      <AppBar
        color="secondary"
        position="fixed"
        sx={{
          top: "40px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{padding: 2}}>
            <img src={logo} />      
          </Box>
      
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
