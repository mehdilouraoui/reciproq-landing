'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { FCC } from '@/types';

export const Button: FCC<{ scrollTo?: string }> = ({ children, scrollTo }) => {
    const onClick = () => {
        if (scrollTo) {
            gsap.registerPlugin(ScrollToPlugin);
            gsap.to(window, { scrollTo, duration: 1.5 });
        }
        return null;
    };
    return (
        <button className="btn" onClick={onClick}>
            <div className="btn-up">{children}</div>
            <div className="btn-base"></div>
        </button>
    );
};
