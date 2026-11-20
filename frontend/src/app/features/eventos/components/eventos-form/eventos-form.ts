import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-form',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './eventos-form.html',
  styleUrl: './eventos-form.css',
})

export class EventosForm {

  private readonly changeDetector = inject(ChangeDetectorRef);
  sending = false;
  status: 'success' | 'error' | null = null;

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.sending) return;
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    data.set('access_key', 'be055772-77d1-4f60-9482-d45f0d905fd3');
    data.set('subject', 'Solicitud de cotización de eventos - Maimará Wine Resort');
    data.set('Tipo de evento', ({ wedding: 'Boda', social: 'Evento social', corporate: 'Evento corporativo', other: 'Otro' } as Record<string, string>)[this.selectedType]);
    data.set('Tipo de fecha', this.dateType === 'exact' ? 'Fecha exacta' : 'Mes aproximado');
    this.sending = true;
    this.status = null;

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission failed');
      form.reset();
      this.selectedType = 'wedding';
      this.dateType = 'exact';
      this.status = 'success';
    } catch {
      this.status = 'error';
    } finally {
      this.sending = false;
      this.changeDetector.markForCheck();
    }
  }

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
