import { useRef } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Zoom from '@mui/material/Zoom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Title from '@/components/Title';
import { CLICK_EVENT } from '@/events/events';
import { tracking, url } from '@/services/core';
import useIsInViewport from '@/hooks/useIsInViewport';
import Trigger from '@/components/Trigger';

import config, { type Config } from './config';

interface GridSocialsProps { show: boolean; }
function GridSocials({ show }: GridSocialsProps) {
    return (
        <Grid container spacing={3}>
            {
                config.map((social, index) => (
                    <Zoom
                        key={index}
                        in={show}
                        style={{
                            transitionDelay: `${index * 200}ms`,
                        }}
                    >
                        <Grid item xs={12} sm={6} md={6}>
                            <SocialCard
                                tag={social.tag}
                                icon={social.icon}
                                title={social.title}
                                label={social.label}
                                disabled={social.disabled}
                                description={social.description}
                            />
                        </Grid>
                    </Zoom>

                ))
            }
        </Grid>
    );
}

function SocialCard({ title, description, icon, label, disabled, tag }: Config) {
    const getStart = () => {
        tracking.event(CLICK_EVENT('create_workflow_click'));
        window.location.href = `${url.manager}/workflow?create-workflow=true`;
    };

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack spacing={1} useFlexGap>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Box>
                            {icon}
                        </Box>
                        {
                            tag && <Box>
                                <Chip
                                    color="secondary"
                                    label={tag}
                                    variant="outlined"
                                    sx={{
                                        fontFamily: 'Inter, sans-serif',
                                    }}
                                />
                            </Box>
                        }
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
                        onClick={getStart}
                    >
                        {label}
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default function Social() {
    const titleRef = useRef<HTMLDivElement>(null);
    const [, titleDisplayed] = useIsInViewport(titleRef);

    const gridRef = useRef<HTMLDivElement>(null);
    const [, gridDisplayed] = useIsInViewport(titleRef);

    return (
        <Fade in={titleDisplayed}>
            <Container sx={{ p: 5 }}>
                <Fade in={titleDisplayed}>
                    <div style={{ position: 'relative' }}>
                        <Title
                            section="Integrações"
                            title="Redes sociais integradas"
                            subtitle="Transforme a sua presença online com a automação de redes sociais que vai além dos limites"
                        />
                        <Trigger ref={titleRef} />
                    </div>
                </Fade>
                <Box my={5} position="relative">
                    <GridSocials show={gridDisplayed} />
                    <Trigger ref={gridRef} />
                </Box>
            </Container>
        </Fade>
    );
}