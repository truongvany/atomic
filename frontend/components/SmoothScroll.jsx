'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Disable Lenis smooth scroll on touch devices — native scroll is better
        const canSmooth = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        const lenis = canSmooth ? new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
        }) : null;

        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);
            window.__lenis = lenis;
        }

        // Dynamic Tab Title Change
        const originalTitle = document.title;
        const handleVisibility = () => {
            document.title = document.hidden ? "Hey, over here!👋 - atomic" : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            if (lenis) lenis.destroy();
            document.removeEventListener('visibilitychange', handleVisibility);
            delete window.__lenis;
        };
    }, []);

    return null;
}
