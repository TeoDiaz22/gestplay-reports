import {createTheme} from "@mui/material";

const primaryColor = {
    light: '#3d2e82',
    main: '#251959',
    // dark: '#e64a19',
    contrastText: '#fff',
};

const secondaryColor = {
    light: '#f5d946',
    main: '#f4cd0b',
    // dark: '#c66900',
    contrastText: '#fff',
};

export const theme = createTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
});

