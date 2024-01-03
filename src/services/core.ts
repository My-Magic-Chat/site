import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';
import { getAnalytics, logEvent } from 'firebase/analytics';

import { isBrowser } from '@/utils';

import FeatureToggle from './feature-toggle';
import Tracking from './tracking';


// VARIABLES
export const theme = process.env.THEME;
export const isProd = process.env.ENV === 'production';

export const url = {
    sso: process.env.SSO_URL,
    manager: process.env.MANAGER_URL,
    profile: process.env.PROFILE_URL
};

// FIREBASE

let featureToggle: FeatureToggle, tracking: Tracking;

if (isBrowser()) {
    const app = initializeApp({
        appId: process.env.ID,
        apiKey: process.env.API_KEY,
        projectId: process.env.PROJECT_ID,
        authDomain: process.env.AUTH_DOMAIN,
        storageBucket: process.env.STORAGE_BUCKET,
        measurementId: process.env.MEASUREMENT_ID,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
    }, 'site');

    const analytics = getAnalytics(app);
    const config = getRemoteConfig(app);

    featureToggle = new FeatureToggle(config, {}, isProd);
    tracking = new Tracking((event, params) => { logEvent(analytics, event, params); }, isProd);
}

export { featureToggle, tracking };