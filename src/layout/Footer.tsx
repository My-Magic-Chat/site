import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <>
            <Paper elevation={0} square>
                <Container
                    component="footer"
                    sx={{
                        textAlign: 'center',
                        position: 'relative',
                        p: 3
                    }}
                >
                    <Typography
                        gutterBottom
                        color="text.secondary"
                    >
                        © My Magic Chat. 2023. All rights reserved
                    </Typography>
                    <Typography
                        variant="body2"
                        fontSize="0.75rem"
                        margin="auto"
                        color="text.secondary"
                    >
                        Quando você visita ou interage com nossos sites, serviços ou ferramentas, nós ou nossos prestadores de serviços autorizados podemos usar cookies para armazenar informações para ajudar a fornecer a você uma experiência melhor, mais rápida e segura e para fins de marketing.
                    </Typography>
                </Container>
            </Paper>
        </>
    );
}