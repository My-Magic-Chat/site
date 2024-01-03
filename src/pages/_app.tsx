import type { AppProps } from 'next/app';

import { PaletteMode } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import theme from '@/styles/original';

import '@/styles/globals.css';
import '@/services/core';

export default function MyApp({ Component, pageProps }: AppProps) {
    const getTokens = (mode: PaletteMode) => { return createTheme(theme[mode]); };

    return (
        <ThemeProvider theme={getTokens('dark')}>
            <AppCacheProvider {...pageProps}>
                <Component {...pageProps} />
            </AppCacheProvider>
        </ThemeProvider>
    );
}
