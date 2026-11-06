import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CalendarDay, CalendarEvent } from '../../interfaces/experiencia.interface';

@Component({
  selector: 'app-experiencias-calendario',
  standalone: true,
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './experiencias-calendario.html',
  styleUrl: './experiencias-calendario.css',
})

export class ExperienciasCalendario {
  weekDays = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  currentDate: Date = new Date(2026, 6, 1); // Inicializa en Julio 2026 (mes 6 en JS)
  currentMonth: string = '';
  days: CalendarDay[] = [];
  selectedDay: CalendarDay | null = null;

  // Base de datos de eventos simples por "Mes-Día" o por ID
  eventsMap: Record<string, CalendarEvent> = {
    '2026-6-5': {
      type: 'Wine',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
    },
    '2026-6-12': {
      type: 'Picnic',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    },
    '2026-6-18': {
      type: 'Sunset',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80'
    },
    '2026-6-24': {
      type: 'Bodega',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80'
    },
    '2026-7-10': {
      type: 'Cata Premium',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
    }
  };

  ngOnInit() {
    this.renderCalendar();
  }

  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Formatear el título del mes (ej: "Julio 2026")
    const monthName = this.currentDate.toLocaleString('es-ES', { month: 'long' });
    this.currentMonth = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;

    // Obtener cantidad de días del mes actual y el día de la semana en que inicia
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const daysArray: CalendarDay[] = [];

    // Celdas vacías/relleno para alinear con los días de la semana
    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.push({
        number: 0,
        date: new Date(),
        event: null,
        isPadding: true
      });
    }

    // Días reales del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const eventKey = `${year}-${month}-${day}`;
      daysArray.push({
        number: day,
        date: new Date(year, month, day),
        event: this.eventsMap[eventKey] ?? null,
        isPadding: false
      });
    }

    this.days = daysArray;
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.selectedDay = null;
    this.renderCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.selectedDay = null;
    this.renderCalendar();
  }

  openDay(day: CalendarDay) {
    if (!day.isPadding) {
      this.selectedDay = day;
    }
  }
}