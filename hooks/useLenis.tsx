'use client';

import Lenis from '@studio-freight/lenis';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayout';

const defaultLenisParams = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical' as const,
    gestureOrientation: 'vertical' as const,
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
};

export const useLenis = () => {
    const [lenis, setLenis] = useState<Lenis>();
    const [newLenis, setNewLenis] = useState(0);

    useIsomorphicLayoutEffect(() => {
        const lenis = new Lenis(defaultLenisParams);

        setLenis(lenis);

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const req = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();

            cancelAnimationFrame(req);
        };
    }, [newLenis]);

    const resetLenis = () => setNewLenis(newLenis + 1);

    return { lenis, resetLenis };
};

export const LenisFactory = () => {
    useLenis();
    return <></>;
};
