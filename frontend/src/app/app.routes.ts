import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Spa } from './features/spa/pages/spa/spa';
import { Alojamiento } from './features/alojamiento/pages/alojamiento/alojamiento';
import { Gastronomia } from './features/gastronomia/pages/gastronomia/gastronomia';
import { Eventos } from './features/eventos/pages/eventos/eventos';
import { Experiencias } from './features/experiencias/pages/experiencias/experiencias';
import { Nosotros } from './features/nosotros/pages/nosotros/nosotros';
import { Nosotros2 } from './features/nosotros-2/pages/nosotros-2/nosotros-2';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'alojamiento', component: Alojamiento },
    { path: 'gastronomia', component: Gastronomia },
    { path: 'eventos', component: Eventos },
    { path: 'spa', component: Spa },
    { path: 'experiencias', component: Experiencias },
    { path: 'nosotros', component: Nosotros },
    { path: 'nosotros-2', component: Nosotros2 }

];
