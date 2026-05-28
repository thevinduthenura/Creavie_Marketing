'use client';
import { useState, useEffect } from 'react';

/**
 * Returns true when the viewport width is ≤ 768px.
 * Uses a default of false (desktop) for SSR safety.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
