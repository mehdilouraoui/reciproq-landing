/* eslint-disable prettier/prettier */
'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import { useWindowSize } from '@/hooks/useWindowSize';
import { FCC } from '@/types';

export const Kinesis: FCC<{
    className?: string;
    subClassName?: string;
    speed: number;
    replaceOnLeave?: boolean;
}> = ({
    children,
    className,
    subClassName,
    speed = 100,
    replaceOnLeave = false,
}) => {
        const { width, height, isMobile } = useWindowSize();
        const isTouchDevice = useIsTouchDevice();

        const childRef = useRef<HTMLDivElement>(null);
        const containerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (isMobile) {
                return;
            }
            const containerRefCopy = containerRef.current;
            const onMouseMove = (event: MouseEvent) => {
                if (isTouchDevice) return;
                const x = (event.clientX / width! - 0.5) * 2 * speed;
                const y = (event.clientY / height! - 0.5) * 2 * speed;

                gsap.to(childRef.current, {
                    x,
                    y,
                    duration: 1,
                    ease: 'expo.out',
                });
            };

            const replace = () => {
                if (replaceOnLeave) {
                    gsap.to(childRef.current, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: 'expo.out',
                    });
                }
            };

            containerRef.current?.addEventListener('mousemove', onMouseMove, false);
            containerRef.current?.addEventListener('mouseleave', replace, false);

            return () => {
                containerRefCopy?.removeEventListener(
                    'mousemove',
                    onMouseMove,
                    false,
                );
            };
        }, [speed, width, height, isTouchDevice, replaceOnLeave, isMobile]);

        return (
            <div ref={containerRef} className={className}>
                <div ref={childRef} className={subClassName}>
                    {children}
                </div>
            </div>
        );
    };
