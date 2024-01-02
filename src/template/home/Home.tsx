import Layout from '@/layout';

import Plans from './plans';
import Hero from './hero';
import Feature from './feature';
import Social from './social';
import GetStarted from './get-started';
import ChangeWay from './change-way';


export default function Home() {
    return (
        <Layout>
            <Hero />
            <Feature />
            <ChangeWay />
            <Social />
            <Plans />
            <GetStarted />
        </Layout>
    );
}