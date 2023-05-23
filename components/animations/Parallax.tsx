'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { FCC } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export const Parallax: FCC<{
    speed: number;
    id: string;
    className?: string;
    position?: 'top';
}> = ({ className, children, speed = 1, id = 'parallax', position }) => {
    const trigger = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline>();
    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        const y = windowWidth! * speed * 0.1;

        timeline.current = gsap
            .timeline({
                scrollTrigger: {
                    id,
                    trigger:
                        position === 'top' ? document.body : trigger.current,
                    scrub: true,
                    start: position === 'top' ? 'top top' : 'top bottom',
                    end: position === 'top' ? '+=100%' : 'bottom top',
                },
            })
            .fromTo(
                target.current,
                { y: position === 'top' ? 0 : -y },
                { y: y, ease: 'none' },
            );

        return () => {
            timeline?.current?.kill();
        };
    }, [id, speed, position, windowWidth]);

    return (
        <div ref={trigger}>
            <div ref={target} className={className}>
                {children}
            </div>
        </div>
    );
};
