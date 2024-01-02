import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip, { type ChipOwnProps } from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

import Poligon from '@/components/Poligon';

import PLANS from './config';

interface PlanCardProps { plan: typeof PLANS[0] };
function PlanCard({ plan }: PlanCardProps) {
    const contract = () => {
        if (plan.disabled) { return ''; }
        console.log('Ir para contratação de planos');
    };

    return (
        <Card elevation={3} sx={{ position: 'relative', overflow: 'initial' }}>
            {
                plan.badge && <Box sx={{ position: 'absolute', right: 10, top: -15 }}>
                    <Chip label={plan.badge.label} color={plan.badge.color as ChipOwnProps['color']} />
                </Box>
            }
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {plan.name}
                </Typography>
                {plan.price}
                <Box mt={3} mb={2}>
                    <Divider />
                </Box>
                <List>
                    {
                        plan.features.map((feature) => (
                            <ListItem key={feature.label}>
                                <ListItemIcon>
                                    {feature.icon}
                                </ListItemIcon>
                                <ListItemText primary={feature.label} />
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    color="primary"
                    variant={plan.disabled ? 'outlined' : 'contained'}
                    onClick={contract}
                >
                    {plan.button_label}
                </Button>
            </CardActions>
        </Card>
    );
}

function GridPlans() {
    return (
        <Grid container spacing={3}>
            {
                PLANS.map((plan, index) => (
                    <Zoom in key={plan.name} style={{ transitionDelay: `${50 * (index + 1)}ms` }}>
                        <Grid item xs={12} sm={6} md={3} key={plan.name}>
                            <PlanCard plan={plan} />
                        </Grid>
                    </Zoom>
                ))
            }
        </Grid>
    );
};

function Plans() {
    const { palette } = useTheme();

    return (
        <Fade in>
            <div style={{ position: 'relative' }} >
                <Paper elevation={0} square>
                    <Container sx={{ p: 5 }}>
                        <Box textAlign="center">
                            <Typography
                                variant="button"
                                gutterBottom
                                component="p"
                                color="text.secondary">
                                Preços
                            </Typography>
                            <Typography
                                variant="h4"
                                gutterBottom
                                fontWeight={800}
                                color="text.primary"
                                fontFamily="Inter, sans-serif"
                                textAlign="center"
                            >
                                Planos flexíveis para você
                            </Typography>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="h6"
                                color="text.secondary"
                                fontFamily="Inter, sans-serif"
                            >
                                Escolha o plano que melhor se encaixa com você.
                            </Typography>
                        </Box>
                        <Box my={5}>
                            <GridPlans />
                        </Box>
                    </Container>
                </Paper>
            </div>
        </Fade>
    );
}

export default Plans;
