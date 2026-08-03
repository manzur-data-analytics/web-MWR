import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCake,
  heroSparkles,
  heroSun,
  heroBell
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-alojamiento-experience',
  imports: [TranslocoPipe, NgIcon, CommonModule],
  viewProviders: [
    provideIcons({
      heroCake,
      heroSparkles,
      heroSun,
      heroBell
    })
  ],
  templateUrl: './alojamiento-experience.html',
  styleUrl: './alojamiento-experience.css',
})

export class AlojamientoExperience implements OnInit, OnDestroy {

  constructor(private ngZone: NgZone) { }

  slides = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=80'
  ];

  currentSlide = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 5000);
    });
  }

  private stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetTimer();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetTimer();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetTimer();
  }

  private resetTimer() {
    this.startAutoPlay();
  }
}