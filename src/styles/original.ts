
import type { ThemeOptions } from '@mui/material/styles';

const transitions: ThemeOptions['transitions'] = {
    duration: {
        shortest: 350,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 500,
        leavingScreen: 195,
    },
};

const light: ThemeOptions = {
    transitions,
    palette: {
        mode: 'light',
        text: {
            primary: '#2d3748',
        },
        primary: {
            main: '#00ab55',
        },
        secondary: {
            main: '#ffd200',
        },
        error: {
            main: '#ef5350',
        },
        warning: {
            main: '#f4ba41',
        },
        info: {
            main: '#4c9cb9'
        },
        success: {
            main: '#4e9489',
        },
        background: {
            default: '#eeeeee',
            paper: '#f5f5f5',
        }
    },
};

const dark: ThemeOptions = {
    transitions,
    palette: {
        mode: 'dark',
        text: {
            primary: '#eeeeef',
        },
        primary: {
            main: '#00ab55',
        },
        secondary: {
            main: '#ffd200',
        },
        error: {
            main: '#ef5350',
        },
        warning: {
            main: '#f4ba41',
        },
        info: {
            main: '#4c9cb9'
        },
        success: {
            main: '#4e9489',
        },
        background: {
            default: '#262c3f',
            paper: '#151a2c',
        }
    },
};

export default { light, dark };