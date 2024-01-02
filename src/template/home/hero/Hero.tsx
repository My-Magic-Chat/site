import { useRef } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import style from './Hero.module.css';

export default function Hero() {
    const { palette } = useTheme();
    const containerRef = useRef<HTMLElement>(null);

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
                                variant="h1"
                                gutterBottom
                                component="h1"
                                fontWeight={800}
                                color="text.primary"
                                fontFamily="Inter, sans-serif"
                            >
                                Automatize suas vendas de forma <span style={{ color: palette.primary.main }}>Mágica</span>
                            </Typography>
                            <Typography variant="h4" component="h4" gutterBottom>
                                O ponto de partida para trazer mais autonomia para o seu negócio é com <strong>My Magic Chat.</strong><br />
                            </Typography>
                            <Typography variant="h4" component="h4">
                                Personalização fácil que ajuda você a automatizar suas vendas de maneira mais rápida e fácil.
                            </Typography>
                            <Box my={3}>
                                <Button variant="outlined" size="large" color="inherit" sx={{ mt: 2 }}>
                                    Entrar
                                </Button>
                                <Button variant="contained" size="large" sx={{ mt: 2, ml: 2 }}>
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