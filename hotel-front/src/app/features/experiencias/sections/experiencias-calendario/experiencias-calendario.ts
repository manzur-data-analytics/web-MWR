import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-experiencias-calendario',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './experiencias-calendario.html',
  styleUrl: './experiencias-calendario.css',
})
export class ExperienciasCalendario {
  weekDays = [
    'DOM',
    'LUN',
    'MAR',
    'MIÉ',
    'JUE',
    'VIE',
    'SÁB'
  ];


  currentMonth = 'Julio 2026';



  days = Array.from({ length: 31 }, (_, i) => {

    const day = i + 1;

    const events: any = {
      5: {
        type: 'Wine'
      },
      12: {
        type: 'Picnic'
      },
      18: {
        type: 'Sunset'
      },
      24: {
        type: 'Bodega'
      }
    };


    return {
      number: day,
      event: events[day] ?? null
    };

  });

  selectedDay: any;

  openDay(day: any) {

    this.selectedDay = day;

  }
}
