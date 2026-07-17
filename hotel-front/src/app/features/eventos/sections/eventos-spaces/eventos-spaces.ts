import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-eventos-spaces',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './eventos-spaces.html',
  styleUrl: './eventos-spaces.css',
})

export class EventosSpaces {
  spaces = [

    {
      id: 'salon',
      number: '01',
      title: 'EVENTS.SPACES.SALON.TITLE',
      description: 'EVENTS.SPACES.SALON.DESCRIPTION',
      capacity: 'EVENTS.SPACES.SALON.CAPACITY'
    },

    {
      id: 'jardin',
      number: '02',
      title: 'EVENTS.SPACES.GARDEN.TITLE',
      description: 'EVENTS.SPACES.GARDEN.DESCRIPTION',
      capacity: 'EVENTS.SPACES.GARDEN.CAPACITY'
    },

    {
      id: 'privado',
      number: '03',
      title: 'EVENTS.SPACES.PRIVATE.TITLE',
      description: 'EVENTS.SPACES.PRIVATE.DESCRIPTION',
      capacity: 'EVENTS.SPACES.PRIVATE.CAPACITY'
    }

  ]


  selected = 'salon';


  selectSpace(id: string) {

    this.selected = id;

  }
}
