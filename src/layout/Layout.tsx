import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { EventData } from '@/events';

import Nav from './Nav';
import Footer from './Footer';

interface RootLayoutProps { children: React.ReactNode; goTo: (page: EventData<'section_click'>['section']) => void; }
export default function RootLayout({ children, goTo }: RootLayoutProps) {
    const { palette } = useTheme();
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Nav goTo={goTo} />
            <Box component="main" sx={{ background: palette.background.default }}>
                {children}
            </Box>
            <Footer />
        </AppRouterCacheProvider>
    );
}