import { useCallback, useEffect, useState } from 'react';

export function useIsTouchDevice() {
    const check = useCallback(
        () =>
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            // @ts-expect-error
            navigator.msMaxTouchPoints > 0,
        [],
    );

    const [isTouchDevice, setIsTouchDevice] = useState<boolean | undefined>(
        undefined,
    );

    const onResize = useCallback(() => {
        setIsTouchDevice(check());
    }, [check]);

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize, { passive: true });

        return () => {
            // @ts-expect-error
            window.removeEventListener('resize', onResize, { passive: true });
        };
    }, [onResize]);

    return isTouchDevice;
}
