import { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { TypographyVariant } from '@mui/material/styles';

import { CLICK_EVENT } from '@/events';
import { tracking, url } from '@/services/core';
import useResize, { type BreakpointName } from '@/hooks/useResize';

import style from './Hero.module.css';

export default function Hero() {
    const { palette } = useTheme();
    const containerRef = useRef<HTMLElement>(null);

    const [screen, setScreen] = useState<BreakpointName>('desktop');

    const sizes: { [x: string]: { [b in BreakpointName]: TypographyVariant } } = {
        superTitle: { desktop: 'h1', tablet: 'h2', mobile: 'h4' },
        title: { desktop: 'h4', tablet: 'h5', mobile: 'h6' }
    };

    useResize({
        onMobile: () => { setScreen('mobile'); },
        onTablet: () => { setScreen('tablet'); },
        onDesktop: () => { setScreen('desktop'); }
    }, []);

    const goToCreateAccount = () => {
        tracking.event(CLICK_EVENT('create_account_click', { origin: 'hero' }));
        window.location.href = `${url.sso}/signin`;
    };

    const goToLogin = () => {
        tracking.event(CLICK_EVENT('go_login_click', { origin: 'hero' }));
        window.location.href = `${url.sso}/signup`;
    };

    return (
        <Paper elevation={0} square sx={{ height: 'calc(100vh - 68.5px)' }}>
            <Container sx={{ height: '100%' }}>
                <Slide
                    in
                    direction="right"
                    container={containerRef.current}
                >
                    <Box
                        className={style['grid-image']}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            ':after': { backgroundImage: `radial-gradient(${palette.primary.main} 20%, transparent 20%)` }
                        }}>
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <Typography
                                variant={sizes.superTitle[screen]}
                                gutterBottom
                                component="h1"
                                fontWeight={800}
                                color="text.primary"
                                fontFamily="Inter, sans-serif"
                            >
                                Automatize suas vendas de forma <span style={{ color: palette.primary.main }}>Mágica</span>
                            </Typography>
                            <Typography
                                variant={sizes.title[screen]}
                                component="h4"
                            >
                                Personalização fácil que ajuda você a automatizar suas vendas de maneira mais rápida e fácil.
                            </Typography>
                            <Box my={3}>
                                <Button
                                    size="large"
                                    color="inherit"
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                    onClick={goToLogin}
                                >
                                    Entrar
                                </Button>
                                <Button
                                    size="large"
                                    variant="contained"
                                    sx={{ mt: 2, ml: 2 }}
                                    onClick={goToCreateAccount}
                                >
                                    Criar Conta
                                </Button>
                            </Box>
                        </div>
                    </Box>
                </Slide>
            </Container>
        </Paper >
    );
}