import { AppBar, Toolbar, Typography, Button, Stack, Box, IconButton, Drawer, List, ListItemButton, ListItemText, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const GlassAppBar = styled(AppBar)(() => ({
  background: "rgba(26, 26, 26, 0.8)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "none",
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "none",
  fontWeight: 400,
  fontSize: "0.95rem",
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: "none",
  fontWeight: 600,
  padding: "10px 24px",
  borderRadius: "25px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: theme.palette.primary.dark,
    transform: "translateY(-1px)",
    boxShadow: `0 8px 25px rgba(0, 255, 136, 0.3)`,
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: "1.5rem",
  color: theme.palette.text.primary,
}));

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["Home", "Resources", "Features", "Community", "Pricing"];
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <GlassAppBar position="fixed">
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Logo variant="h6">LOGO</Logo>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop nav */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <NavButton key={item}>{item}</NavButton>
          ))}

          <NavButton sx={{ ml: 2 }}>Login</NavButton>

          <GetStartedButton>GET STARTED</GetStartedButton>
        </Stack>

        {/* Mobile menu button */}
        <IconButton color="inherit" edge="end" onClick={toggleMobile} sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleMobile} PaperProps={{ sx: { width: 280, bgcolor: 'background.default' } }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>Menu</Typography>
        </Box>
        <Divider />
        <List>
          {navItems.map((text) => (
            <ListItemButton key={text} onClick={toggleMobile}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <GetStartedButton fullWidth>GET STARTED</GetStartedButton>
          <Button variant="text" sx={{ mt: 1 }} fullWidth onClick={toggleMobile}>Login</Button>
        </Box>
      </Drawer>
    </GlassAppBar>
  );
}
