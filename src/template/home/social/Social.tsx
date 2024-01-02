import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import config, { type Config } from './config';

function Title() {
    return (
        <Box textAlign="center">
            <Typography
                variant="button"
                gutterBottom
                component="p"
                color="text.secondary">
                Integrações
            </Typography>
            <Typography
                variant="h4"
                gutterBottom
                component="h4"
                color="text.primary"
                fontFamily="Inter, sans-serif"
            >
                Redes sociais integradas
            </Typography>
            <Typography
                variant="h6"
                gutterBottom
                component="h6"
                color="text.secondary"
                fontFamily="Inter, sans-serif"
            >
                Transforme a sua presença online com a automação de redes sociais que vai além dos limites
            </Typography>
        </Box>
    );
}

function GridSocials() {
    return (
        <Grid container spacing={3}>
            {
                config.map((social, index) => (
                    <Grid key={social.title} item xs={12} sm={6} md={6}>
                        <SocialCard
                            icon={social.icon}
                            title={social.title}
                            label={social.label}
                            disabled={social.disabled}
                            description={social.description}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

function SocialCard({ title, description, icon, label, disabled }: Config) {
    return (
        <Card elevation={0}>
            <CardContent>
                <Stack spacing={1} useFlexGap>
                    <Box>
                        {icon}
                    </Box>
                    <Box>
                        <Typography variant="h4" component="h4" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body1" component="h6" color="text.secondary">
                            {description}
                        </Typography>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        disabled={disabled}
                        sx={{ mt: 2 }}
                    >
                        {label}
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default function Social() {
    return (
        <Fade in>
            <Container sx={{ p: 5 }}>
                <Title />
                <Box my={5}>
                    <GridSocials />
                </Box>
            </Container>
        </Fade>
    );
}