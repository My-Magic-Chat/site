import { useRef } from 'react';

import Box from '@mui/material/Box';

import Layout from '@/layout';
import { tracking } from '@/services/core';
import { CLICK_EVENT, EventData } from '@/events';

import Hero from './hero';
import Plans from './plans';
import Social from './social';
import Feature from './feature';
import ChangeWay from './change-way';
import GetStarted from './get-started';

export default function Home() {

    const refFeature = useRef<null | HTMLDivElement>(null);
    const refSocial = useRef<null | HTMLDivElement>(null);
    const refPlans = useRef<null | HTMLDivElement>(null);

    const goTo = (page: EventData<'section_click'>['section']) => {
        if (page === 'feature') { refFeature.current?.scrollIntoView({ behavior: 'smooth' }); }
        if (page === 'social') { refSocial.current?.scrollIntoView({ behavior: 'smooth' }); }
        if (page === 'plan') { refPlans.current?.scrollIntoView({ behavior: 'smooth' }); }

        tracking.event(CLICK_EVENT('section_click', { section: page }));
    };

    return (
        <Layout goTo={goTo}>
            <Hero />
            <Box ref={refFeature}>
                <Feature />
            </Box>
            <ChangeWay />
            <Box ref={refSocial}>
                <Social />
            </Box>
            <Box ref={refPlans}>
                <Plans />
            </Box>
            <GetStarted />
        </Layout>
    );
}