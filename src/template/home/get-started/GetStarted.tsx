import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';

function Title() {
    return (
        <>
            <Typography
                variant="button"
                gutterBottom
                component="p"
                color="text.secondary">
                Iniciar
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                component="h4"
                color="text.primary"
                fontFamily="Inter, sans-serif"
            >
                Comece com My Magic Chat hoje
            </Typography>
            <Typography
                variant="h6"
                gutterBottom
                component="h6"
                color="text.secondary"
                fontFamily="Inter, sans-serif"
            >
                Crie processos de venda de forma rápida e totalmente personalizável.
            </Typography>
        </>
    );
}

export default function GetStarted() {
    return (
        <Fade in>
            <Container sx={{ p: 5 }}>
                <Box textAlign="center">
                    <Title />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Contratar agora
                    </Button>
                </Box>
            </Container>
        </Fade>
    );
}