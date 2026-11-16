import { EventosForm } from '../../components/eventos-form/eventos-form';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-cotizacion',
  imports: [TranslocoPipe, EventosForm],
  templateUrl: './eventos-cotizacion.html',
  styleUrl: './eventos-cotizacion.css',
})

export class EventosCotizacion {}
