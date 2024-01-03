import { RemoteConfig } from 'firebase/remote-config';

export default class FeatureToggle {
    public config: RemoteConfig;

    constructor(config: RemoteConfig, defaultConfig: Record<string, any>, isProd: boolean) {
        config.defaultConfig = defaultConfig;
        config.settings = {
            minimumFetchIntervalMillis: isProd ? 1000 : 1000,
            fetchTimeoutMillis: 60000
        };

        this.config = config;
    }
}