'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { FCC } from '@/types';

export const Button: FCC<{
    scrollTo?: string;
    disabled?: boolean;
    onClick?: () => void;
}> = ({ children, scrollTo, disabled = false, onClick }) => {
    const click = () => {
        if (scrollTo) {
            gsap.registerPlugin(ScrollToPlugin);
            gsap.to(window, { scrollTo, duration: 1.5 });
        } else {
            onClick && onClick();
        }
        return null;
    };
    return (
        <button className="btn" onClick={click} disabled={disabled}>
            <div className="btn-up">{children}</div>
            <div className="btn-base"></div>
        </button>
    );
};
