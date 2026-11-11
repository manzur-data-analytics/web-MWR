import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentYear = new Date().getFullYear();

  hotelInfo = {
    name: 'MWR Hotel',
    address: 'Ex RN 9 3225, Maimar\u00e1',
    phone: '+54 388 515 3356',
    email: 'comercial@maimarawineresort.com'
  };

  socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maimarawineresort/'
    }
  ];

  // 2. Base de logos de marcas (solo los nombres de archivo)
  private baseLogos = [
    { image: 'cm.png', name: 'Casa Mocha', url: 'https://www.instagram.com/casa_mocha/?hl=es' },
    { image: 'eb.png', name: 'Bodega El Bayeh', url: 'https://bodegaelbayeh.com.ar/' },
    { image: 'lh.png', name: 'La Huerta Tambo', url: 'https://lahuertatambo.com/' }
  ];

  // 3. Array final que usará el HTML
  logosInifinitos: { image: string; name: string; url: string }[] = [];

  ngOnInit(): void {
    // Multiplicamos la lista para asegurarnos de que llene monitores ultra-wide
    this.logosInifinitos = [
      ...this.baseLogos,
      ...this.baseLogos,
      ...this.baseLogos
    ];
  }
}
