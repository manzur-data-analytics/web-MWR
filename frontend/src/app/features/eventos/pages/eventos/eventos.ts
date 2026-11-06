import { Component } from '@angular/core';
import { EventosHero } from '../../sections/eventos-hero/eventos-hero';
import { EventosOffers } from '../../sections/eventos-offers/eventos-offers';
// import { EventosSpaces } from '../../sections/eventos-spaces/eventos-spaces';
import { EventosCotizacion } from '../../sections/eventos-cotizacion/eventos-cotizacion';

@Component({
  selector: 'app-eventos',
  imports: [EventosHero, EventosOffers, /* EventosSpaces, */ EventosCotizacion],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

}
