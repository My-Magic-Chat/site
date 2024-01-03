import { useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Title from '@/components/Title';
import { CLICK_EVENT } from '@/events';
import { tracking, url } from '@/services/core';
import useIsInViewport from '@/hooks/useIsInViewport';
import Trigger from '@/components/Trigger';

export default function GetStarted() {
    const titleRef = useRef<HTMLDivElement>(null);
    const [, titleDisplayed] = useIsInViewport(titleRef);

    const goToCreateAccount = () => {
        tracking.event(CLICK_EVENT('create_account_click', { origin: 'getStarted' }));
        window.location.href = `${url.sso}/signin`;
    };

    return (
        <Slide in={titleDisplayed} direction="right">
            <Container sx={{ p: 5, position: 'relative' }}>
                <Box textAlign="center">
                    <Title
                        section="Iniciar"
                        title="Comece com My Magic Chat hoje"
                        subtitle="Crie processos de venda de forma rápida e totalmente personalizável."
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        onClick={goToCreateAccount}
                    >
                        Criar conta
                    </Button>
                </Box>
                <Trigger ref={titleRef} top={125} />
            </Container>
        </Slide>
    );
}