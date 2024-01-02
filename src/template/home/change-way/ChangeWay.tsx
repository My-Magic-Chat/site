import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import style from './ChangeWay.module.css';

function Title() {
    return (
        <>
            <Typography
                variant="button"
                gutterBottom
                component="p"
                color="text.secondary">
                Vendas
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                color="text.primary"
                fontFamily="Inter, sans-serif"
                mb={3}
            >
                Mude a maneira como você vende online. Para sempre.
            </Typography>
        </>
    );
}

export default function GetStarted() {
    const { palette } = useTheme();
    return (
        <Fade in>
            <Container sx={{ p: 5 }}>
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
                        <Title />
                        <Box margin="auto">
                            <Typography variant="h6" color="text.secondary" fontFamily="Inter, sans-serif">
                                Descubra o poder da automação em suas vendas online. <br /><br />
                                Transforme seu processo de vendas, potencialize seus resultados e experimente o futuro do comércio eletrônico, tudo com a facilidade que você merece. <br /><br />
                                Com My Magic Chat você atende seus clientes sem precisar de um atendente.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Fade >
    );
}