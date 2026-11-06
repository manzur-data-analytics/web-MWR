import { Injectable } from '@angular/core';
import Lenis from 'lenis';


@Injectable({
    providedIn: 'root'
})

export class SmoothScrollService {

    private lenis!: Lenis;

    start() {

        this.lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 0.8
        });

        const raf = (time: number) => {
            this.lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

    }

    scrollToTop() {
        this.lenis?.scrollTo(0, {
            immediate: true
        });
    }

    scrollTo(target: string | number) {
        this.lenis?.scrollTo(target);
    }

}