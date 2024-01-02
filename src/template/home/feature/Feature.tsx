import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import list from './config';
import Puzzle from './Puzzle';

function Title() {
    return (
        <Box textAlign="center">
            <Typography
                variant="button"
                gutterBottom
                component="p"
                color="text.secondary">
                Funcionalidades
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                component="h4"
                color="text.primary"
                fontFamily="Inter, sans-serif"
            >
                Construções simples e descomplicada
            </Typography>
            <Typography
                variant="h6"
                gutterBottom
                component="h6"
                color="text.secondary"
                fontFamily="Inter, sans-serif"
            >
                Totalmente flexível e customizável. Monte suas automações da forma que desejar.
                <br />
                Uma experiência única de um sistema de descomplicado.
            </Typography>
            <Button
                size="large"
                variant="contained"
                sx={{ mt: 2 }}
            >
                Inicie agora
            </Button>
        </Box>
    );
}

function GridFeature() {
    return (
        <Grid container spacing={3}>
            {
                list.map((feature, index) => (
                    <Grid item key={feature.title} xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
                            <Box sx={{ mt: .5, mr: 1 }}>
                                {feature.icon}
                            </Box>
                            <Box>
                                <Typography variant="h5" color="text.primary">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default function Feature() {
    const { palette } = useTheme();

    return (
        <Container sx={{ p: 5 }}>
            <Title />
            <Box maxWidth={450} sx={{ mt: 6, mx: 'auto' }}>
                <Puzzle
                    primary={palette.primary.main}
                    secondary={palette.secondary.main}
                    primaryDark={palette.primary.dark}
                />
            </Box>
            <Box sx={{ mt: 6 }}>
                <GridFeature />
            </Box>
        </Container>
    );
}