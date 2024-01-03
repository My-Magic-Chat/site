import logger from '../logger';

export interface Event<T = any> { name: string; params?: T; }

export default class Tracking {
    constructor(private fn: (event: string, params: any) => void, private on: boolean) { }

    private get defaultParams() {
        const { hostname, pathname } = window.location;

        return {
            project: 'site',
            os: this.os,
            host: hostname,
            path: pathname,
        };
    }

    private get os() {
        let detectOS = 'Unknown OS';

        if (navigator.userAgent.includes('Mac')) { detectOS = 'MacOS'; }
        if (navigator.userAgent.includes('Win')) { detectOS = 'Windows'; }
        if (navigator.userAgent.includes('Linux')) { detectOS = 'Linux'; }

        return detectOS;
    }

    public event<T>({ name, params }: Event<T>) {
        const data = { ...this.defaultParams, ...params };

        if (this.on) { this.fn(name, data); }

        logger.info(`%c Tracking event: ${name}`, 'color: #ed1c24; font-weight: bold;', data);
    }
}