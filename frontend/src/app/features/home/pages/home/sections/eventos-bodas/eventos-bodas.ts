import { EventosForm } from '../../../../../eventos/components/eventos-form/eventos-form';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-bodas',
  imports: [TranslocoPipe, RouterLink, EventosForm],
  templateUrl: './eventos-bodas.html',
  styleUrl: './eventos-bodas.css',
})
export class EventosBodas {}
