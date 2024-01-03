import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import Title from '@/components/Title';
import Trigger from '@/components/Trigger';
import useIsInViewport from '@/hooks/useIsInViewport';

import list from './config';
import Puzzle from './Puzzle';

interface GridFeatureProps { show: boolean; }
function GridFeature({ show }: GridFeatureProps) {
    return (
        <Grid container spacing={3}>
            {
                list.map((feature, index) => (
                    <Zoom
                        in={show}
                        key={index}
                        style={{ transitionDelay: `${150 * (index + 1)}ms` }}
                    >
                        <Grid item xs={12} sm={6} md={6}>
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
                    </Zoom>
                ))
            }
        </Grid>
    );
}

export default function Feature() {
    const { palette } = useTheme();

    const titleRef = useRef<HTMLDivElement>(null);
    const [, titleDisplayed] = useIsInViewport(titleRef);

    const puzzleRef = useRef<HTMLDivElement>(null);
    const [, puzzleDisplayed] = useIsInViewport(puzzleRef);

    const gridRef = useRef<HTMLDivElement>(null);
    const [, gridDisplayed] = useIsInViewport(gridRef);

    return (
        <Container sx={{ p: 5 }}>
            <Zoom in={titleDisplayed}>
                <div style={{ position: 'relative' }}>
                    <Title
                        section="Funcionalidades"
                        title="Construções simples e descomplicada"
                        subtitle={
                            <>
                                Totalmente flexível e customizável. Monte suas automações da forma que desejar.
                                <br />
                                Uma experiência única de um sistema de descomplicado.
                            </>
                        }
                    />
                    <Trigger ref={titleRef} />
                </div>
            </Zoom>
            <Zoom in={puzzleDisplayed} >
                <Box maxWidth={450} sx={{ position: 'relative', mt: 6, mx: 'auto' }}>
                    <Puzzle
                        primary={palette.primary.main}
                        secondary={palette.secondary.main}
                        primaryDark={palette.primary.dark}
                    />
                    <Trigger ref={puzzleRef} />
                </Box>
            </Zoom>
            <Box sx={{ position: 'relative', mt: 6 }}>
                <GridFeature show={gridDisplayed} />
                <Trigger ref={gridRef} top={100} />
            </Box>
        </Container>
    );
}