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
    address: 'Maimará, Jujuy, Argentina',
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

  // 2. Base de logos de marcas (solo los nombres de archivo)
  private baseLogos: string[] = ['cm.png', 'eb.png', 'lh.png'];

  // 3. Array final que usará el HTML
  logosInifinitos: string[] = [];

  ngOnInit(): void {
    // Multiplicamos la lista para asegurarnos de que llene monitores ultra-wide
    this.logosInifinitos = [
      ...this.baseLogos,
      ...this.baseLogos,
      ...this.baseLogos
    ];
  }
}
