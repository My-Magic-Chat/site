import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import Nav from './Nav';
import Footer from './Footer';

interface RootLayoutProps { children: React.ReactNode; }
export default function RootLayout({ children }: RootLayoutProps) {
    const { palette } = useTheme();
    return (
        <AppRouterCacheProvider>
            <Nav />
            <Box component="main" sx={{ background: palette.background.default }}>
                {children}
            </Box>
            <Footer />
        </AppRouterCacheProvider>
    );
}