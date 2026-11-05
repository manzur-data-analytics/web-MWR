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
  // Imágenes en alta resolución con tono cálido/elegante
  bgImage1 = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80'; // Hotel luxury exterior
  bgImage2 = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80';

  history = [
    {
      year: '1912',
      title: 'ABOUT.HISTORY.ITEM1_TITLE', // Ej: "Los Primeros Terrenos"
      text: 'ABOUT.HISTORY.ITEM1_TEXT'    // Ej: "Nuestra familia inició su camino cultivando las primeras hectáreas en el valle."
    },
    {
      year: '1975',
      title: 'ABOUT.HISTORY.ITEM2_TITLE', // Ej: "Consolidación Enológica"
      text: 'ABOUT.HISTORY.ITEM2_TEXT'    // Ej: "Se funda la primera bodega propia, exportando vinos a mercados selectos."
    },
    {
      year: '2008',
      title: 'ABOUT.HISTORY.ITEM3_TITLE', // Ej: "Apertura del Hotel Boutique"
      text: 'ABOUT.HISTORY.ITEM3_TEXT'    // Ej: "Convertimos la antigua casona familiar en un hotel de lujo privado."
    },
    {
      year: 'HOY',
      title: 'ABOUT.HISTORY.ITEM4_TITLE', // Ej: "Un Dominio Exclusivo"
      text: 'ABOUT.HISTORY.ITEM4_TEXT'    // Ej: "Ofrecemos una experiencia integral de hospitalidad de alta gama y bienestar."
    }
  ];

  fincas = [
    {
      name: 'ABOUT.FINCAS.ITEM1_NAME',
      location: 'ABOUT.FINCAS.ITEM1_LOCATION',
      ha: 45,
      msnm: 950,
      text: 'ABOUT.FINCAS.ITEM1_TEXT',
      varietals: 'ABOUT.FINCAS.ITEM1_VARIETALS'
    },
    {
      name: 'ABOUT.FINCAS.ITEM2_NAME',
      location: 'ABOUT.FINCAS.ITEM2_LOCATION',
      ha: 80,
      msnm: 1200,
      text: 'ABOUT.FINCAS.ITEM2_TEXT',
      varietals: 'ABOUT.FINCAS.ITEM2_VARIETALS'
    },
    {
      name: 'ABOUT.FINCAS.ITEM3_NAME',
      location: 'ABOUT.FINCAS.ITEM3_LOCATION',
      ha: 120,
      msnm: 1100,
      text: 'ABOUT.FINCAS.ITEM3_TEXT',
      varietals: 'ABOUT.FINCAS.ITEM3_VARIETALS'
    },
    {
      name: 'ABOUT.FINCAS.ITEM4_NAME',
      location: 'ABOUT.FINCAS.ITEM4_LOCATION',
      ha: 30,
      msnm: 1050,
      text: 'ABOUT.FINCAS.ITEM4_TEXT',
      varietals: 'ABOUT.FINCAS.ITEM4_VARIETALS'
    }
  ];

  pilares = [
    {
      number: '01',
      subtitleKey: 'ABOUT.PILARES.ITEM1_SUBTITLE',
      titleKey: 'ABOUT.PILARES.ITEM1_TITLE',
      textKey: 'ABOUT.PILARES.ITEM1_TEXT'
    },
    {
      number: '02',
      subtitleKey: 'ABOUT.PILARES.ITEM2_SUBTITLE',
      titleKey: 'ABOUT.PILARES.ITEM2_TITLE',
      textKey: 'ABOUT.PILARES.ITEM2_TEXT'
    },
    {
      number: '03',
      subtitleKey: 'ABOUT.PILARES.ITEM3_SUBTITLE',
      titleKey: 'ABOUT.PILARES.ITEM3_TITLE',
      textKey: 'ABOUT.PILARES.ITEM3_TEXT'
    }
  ];
}