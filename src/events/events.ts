import { type Event } from '@/services/tracking';

import * as e from './interface';

export function PAGEVIEW(page: string): Event<e.PageView> {
    return {
        name: 'page_rendered',
        params: { page }
    };
}

export function CLICK_EVENT<Name extends e.EventClick>(name: Name, params?: e.EventData<Name>): Event {
    return { name, params };
}