import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF88',
      light: '#33FF9A',
      dark: '#00CC6A',
      contrastText: '#000000'
    },
    secondary: {
      main: '#1A1A1A',
      light: '#2D2D2D',
      dark: '#0D0D0D',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#0A0A0A',
      paper: '#1F1F1F'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    common: {
      black: '#000000',
      white: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.125rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5
    }
  },
  shape: {
    borderRadius: 12
  }
});

export default theme;