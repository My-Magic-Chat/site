import { useRef } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Title from '@/components/Title';
import Trigger from '@/components/Trigger';
import useIsInViewport from '@/hooks/useIsInViewport';

import style from './ChangeWay.module.css';

export default function GetStarted() {
    const { palette } = useTheme();

    const titleRef = useRef<HTMLDivElement>(null);
    const [, titleDisplayed] = useIsInViewport(titleRef);

    return (
        <Fade in={titleDisplayed}>
            <Container sx={{ p: 5, position: 'relative' }}>
                <Paper
                    className={style['grid-image']}
                    elevation={0}
                    sx={{
                        padding: 5,
                        ':after': {
                            backgroundImage: `radial-gradient(${palette.secondary.main} 20%, transparent 20%)`
                        }
                    }}
                >
                    <Box textAlign="center">
                        <Title
                            section="Vendas"
                            title={
                                <>
                                    Mude a maneira como você vende online<br />
                                    para sempre.
                                </>
                            }
                            subtitle={
                                <>
                                    Descubra o poder da automação em suas vendas online. <br /><br />
                                    Transforme seu processo de vendas, potencialize seus resultados e experimente o futuro do comércio eletrônico, tudo com a facilidade que você merece. <br /><br />
                                    Com My Magic Chat você atende seus clientes sem precisar de um atendente.
                                </>
                            }
                        />
                    </Box>
                </Paper>
                <Trigger ref={titleRef} top={150} />
            </Container>
        </Fade>
    );
}