'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { FCC } from '@/types';

// @ts-ignore
export const MobileWrapper: FCC<{ className: string }> = ({
    className,
    children,
}) => {
    const { isMobile } = useWindowSize();
    return isMobile ? (
        <div className={className}>
            {children}
            {children}
        </div>
    ) : (
        children
    );
};
