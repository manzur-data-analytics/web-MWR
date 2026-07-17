import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-offers',
  imports: [TranslocoPipe],
  templateUrl: './eventos-offers.html',
  styleUrl: './eventos-offers.css',
})

export class EventosOffers {
  
  offers = [

    {
      id: 1,
      number: '01',
      title: 'EVENTS.OFFERS.WEDDINGS.TITLE',
      short: 'EVENTS.OFFERS.WEDDINGS.SHORT',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90'
    },

    {
      id: 2,
      number: '02',
      title: 'EVENTS.OFFERS.SOCIAL.TITLE',
      short: 'EVENTS.OFFERS.SOCIAL.SHORT',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=90'
    },

    {
      id: 3,
      number: '03',
      title: 'EVENTS.OFFERS.CORPORATE.TITLE',
      short: 'EVENTS.OFFERS.CORPORATE.SHORT',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90'
    }

  ]

  openOffer(item: any) {
    console.log(item)
  }
}
