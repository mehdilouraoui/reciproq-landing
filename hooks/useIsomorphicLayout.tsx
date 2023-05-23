import { useEffect, useLayoutEffect } from 'react';
import { HAS_WINDOW } from '../lib';

export const useIsomorphicLayoutEffect = HAS_WINDOW
    ? useLayoutEffect
    : useEffect;
