import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-form',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './eventos-form.html',
  styleUrl: './eventos-form.css',
})

export class EventosForm {

  dateType: 'exact' | 'month' = 'exact';

  eventTypes = [

    {
      value: 'wedding',
      label: 'EVENTS.QUOTE.WEDDING'
    },

    {
      value: 'social',
      label: 'EVENTS.QUOTE.SOCIAL'
    },

    {
      value: 'corporate',
      label: 'EVENTS.QUOTE.CORPORATE'
    },

    {
      value: 'other',
      label: 'EVENTS.QUOTE.OTHER'
    }

  ];

  selectedType = 'wedding';
}
