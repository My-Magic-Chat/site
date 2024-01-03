import { useRef } from 'react';

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

import Title from '@/components/Title';
import { CLICK_EVENT } from '@/events';
import { tracking } from '@/services/core';
import useIsInViewport from '@/hooks/useIsInViewport';
import Trigger from '@/components/Trigger';

import PLANS from './config';

interface PlanCardProps { plan: typeof PLANS[0] };
function PlanCard({ plan }: PlanCardProps) {
    const contract = () => {
        tracking.event(CLICK_EVENT('contract_plan_click', { plan_name: plan.name }));

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

interface GridPlansProps { show: boolean; }
function GridPlans({ show }: GridPlansProps) {
    return (
        <Grid container spacing={3}>
            {
                PLANS.map((plan, index) => (
                    <Zoom in={show} key={plan.name} style={{ transitionDelay: `${100 * (index + 1)}ms` }}>
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
    const titleRef = useRef<HTMLDivElement>(null);
    const [, titleDisplayed] = useIsInViewport(titleRef);

    const gridRef = useRef<HTMLDivElement>(null);
    const [, gridDisplayed] = useIsInViewport(gridRef);

    return (
        <Paper elevation={0} square>
            <Container sx={{ p: 5 }}>
                <Fade in={titleDisplayed}>
                    <div style={{ position: 'relative' }}>
                        <Title
                            section="Preços"
                            title="Planos flexíveis para você"
                            subtitle="Escolha o plano que melhor se encaixa com você."
                        />
                        <Trigger ref={titleRef} />
                    </div>
                </Fade>
                <Box my={5} position="relative">
                    <GridPlans show={gridDisplayed} />
                    <Trigger ref={gridRef} />
                </Box>
            </Container>
        </Paper>
    );
}

export default Plans;
