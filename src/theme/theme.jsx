import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: '#212121',
    },
    action: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

export default function ThemeApp({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}