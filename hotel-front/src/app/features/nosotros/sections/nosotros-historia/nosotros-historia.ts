import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nosotros-historia',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './nosotros-historia.html',
  styleUrl: './nosotros-historia.css',
})
export class NosotrosHistoria {


  history = [


    {
      year: '1920',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      title: 'ABOUT.HISTORY.ITEM1_TITLE',
      text: 'ABOUT.HISTORY.ITEM1_TEXT'
    },


    {
      year: '1955',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'ABOUT.HISTORY.ITEM2_TITLE',
      text: 'ABOUT.HISTORY.ITEM2_TEXT'
    },


    {
      year: '1985',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
      title: 'ABOUT.HISTORY.ITEM3_TITLE',
      text: 'ABOUT.HISTORY.ITEM3_TEXT'
    },


    {
      year: 'HOY',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'ABOUT.HISTORY.ITEM4_TITLE',
      text: 'ABOUT.HISTORY.ITEM4_TEXT'
    }


  ];

}
