'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { FCC } from '@/types';

type HighlightProps = { color: 'green' | 'blue' | 'orange' };

export const Highlight: FCC<HighlightProps> = ({ color }) => {
    const container = useRef<HTMLDivElement>(null);
    const ref = useRef<SVGPathElement>(null);

    useIsomorphicLayoutEffect(() => {
        const totalLength = ref.current?.getTotalLength();
        const stroke = `stroke-dasharray: ${totalLength}; stroke-dashoffset: ${totalLength}`;
        ref.current?.setAttribute('style', stroke);
    }, []);

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: container.current,
            start: 'center 85%',
            onEnter: () => {
                if (ref.current) {
                    ref.current.classList.add('pathLine');
                }
            },
        });
    }, []);

    return (
        <div className={`highlight ${color}`} ref={container}>
            <svg viewBox="-10 -10 532 532">
                <path
                    ref={ref}
                    className="path"
                    stroke="black"
                    strokeWidth="11"
                    strokeLinecap="round"
                    d="M353.275 13.4838C304.441 8.79645 228.473 4.63328 159.367 7.36655C124.801 8.73365 92.1288 11.8202 65.4946 17.3687C38.5324 22.9855 18.9491 30.902 9.31733 41.0712C6.39853 44.1528 5.59253 46.3738 5.50793 47.7778C5.43323 49.0171 5.86313 50.5628 7.78713 52.5609C11.9943 56.9299 21.3805 61.379 36.0353 65.3505C64.8336 73.1549 109.676 78.0552 159.708 80.2122C209.631 82.3645 264.329 81.7712 312.642 78.7297C361.106 75.6786 402.654 70.1908 426.55 62.7302C436.214 59.7128 443.184 56.8983 447.967 54.3317C452.93 51.6684 454.806 49.6527 455.355 48.6215C455.458 48.4266 455.49 48.3144 455.499 48.265C455.484 48.2085 455.407 47.9712 455.062 47.5433C454.082 46.3259 451.853 44.6834 447.907 42.8675C440.181 39.3118 428.335 36.1772 414.985 33.6155"
                ></path>
            </svg>
        </div>
    );
};
