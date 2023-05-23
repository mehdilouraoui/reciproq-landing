'use client';

import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

export const GridHelper = () => {
    const [active, setActive] = useState(false);

    useIsomorphicLayoutEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (event.code === 'KeyG') {
                return setActive(!active);
            }
        };
        window.addEventListener('keydown', keydown);
        return () => {
            window.removeEventListener('keydown', keydown);
        };
    }, [active]);

    return (
        <>
            {active && (
                <div className="grid-helper">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </>
    );
};
