import { RefObject, useState, useMemo, useEffect } from 'react';

import { isBrowser } from '@/utils';

export default function useIsInViewport(ref: RefObject<HTMLDivElement>) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [alreadyDisplayed, setAlreadyDisplayed] = useState(false);

    const observer = useMemo(() => {
        return isBrowser()
            ? new IntersectionObserver(([entry]) => {
                if (!alreadyDisplayed) { setAlreadyDisplayed(true); }
                setIsIntersecting(entry.isIntersecting);
            })
            : {} as IntersectionObserver;
    }, [alreadyDisplayed]);

    useEffect(() => {
        if (isBrowser()) {
            if (ref) { observer.observe(ref.current as Element); }

            return () => { observer.disconnect(); };
        }
    }, [ref, observer]);

    return [isIntersecting, alreadyDisplayed];
}