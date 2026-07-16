import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentYear = new Date().getFullYear();

  hotelInfo = {
    name: 'MWR Hotel',
    address: 'Purmamarca, Jujuy, Argentina',
    phone: '+54 388 000 0000',
    email: 'reservas@mwrhotel.com'
  };

  socials = [
    {
      name: 'Instagram',
      url: '#'
    },
    {
      name: 'Facebook',
      url: '#'
    }
  ];
}
