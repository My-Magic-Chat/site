import { useEffect } from 'react';

type BreakpointLimits = 'TABLET' | 'DESKTOP' | 'WIDESCREEN';
type BreakpointData = { [key in BreakpointLimits]: number };

export type BreakpointName = 'mobile' | 'tablet' | 'desktop';

type Medias = {
    mobile: MediaQueryList;
    tablet: MediaQueryList;
    desktop: MediaQueryList;
    widescreen: MediaQueryList;
}

export interface Callback {
    onMobile?: () => void;
    onTablet?: () => void;
    onDesktop?: () => void;
}

const BREAKPOINTS = ({ TABLET, DESKTOP, WIDESCREEN }: BreakpointData) => {
    return {
        MAX_MOBILE: `(max-width: ${TABLET - 1}px)`,
        MIN_TABLET: `(min-width: ${TABLET}px)`,
        MAX_TABLET: `(max-width: ${DESKTOP - 1}px)`,
        MIN_DESKTOP: `(min-width: ${DESKTOP}px)`,
        MAX_DESKTOP: `(max-width: ${WIDESCREEN - 1}px)`,
        MIN_WIDESCREEN: `(min-width: ${WIDESCREEN}px)`,
    };
};

const MEDIAS = (breakpoints: ReturnType<typeof BREAKPOINTS>) => ({
    mobile: breakpoints.MAX_MOBILE,
    tablet: `${breakpoints.MIN_TABLET} and ${breakpoints.MAX_TABLET}`,
    desktop: `${breakpoints.MIN_DESKTOP} and ${breakpoints.MAX_DESKTOP}`,
    widescreen: `${breakpoints.MIN_WIDESCREEN}`,
});

const getMedias = (): Medias => {
    const medias = MEDIAS(BREAKPOINTS({ TABLET: 900, DESKTOP: 1200, WIDESCREEN: 1536 }));

    return {
        mobile: window.matchMedia(medias.mobile),
        tablet: window.matchMedia(medias.tablet),
        desktop: window.matchMedia(medias.desktop),
        widescreen: window.matchMedia(medias.widescreen),
    };
};

export default function useResize(callback: Callback, deps: any[] = []) {

    const { onMobile, onTablet, onDesktop } = callback || {};

    const MAP_CALLBACKS = {
        mobile: onMobile,
        tablet: onTablet,
        desktop: onDesktop,
    };

    const checker = (event: MediaQueryListEvent, fn: () => void) => {
        if (event.matches) { fn(); }
    };

    const makeMobile = (event: MediaQueryListEvent) => { if (onMobile) { checker(event, onMobile); } };
    const makeTablet = (event: MediaQueryListEvent) => { if (onTablet) { checker(event, onTablet); } };
    const makeDesktop = (event: MediaQueryListEvent) => { if (onDesktop) { checker(event, onDesktop); } };

    const initialize = (medias: Medias) => {
        const key = Object.keys(medias).find((key) => medias[key as keyof Medias].matches) as keyof typeof MAP_CALLBACKS;
        MAP_CALLBACKS[key]?.();
    };

    useEffect(() => {
        const medias = getMedias();
        initialize(medias);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const medias = getMedias();

        onMobile && medias.mobile.addEventListener('change', makeMobile);
        onTablet && medias.tablet.addEventListener('change', makeTablet);
        onDesktop && medias.desktop.addEventListener('change', makeDesktop);

        return () => {
            onMobile && medias.mobile.removeEventListener('change', makeMobile);
            onTablet && medias.tablet.removeEventListener('change', makeTablet);
            onDesktop && medias.desktop.removeEventListener('change', makeDesktop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};