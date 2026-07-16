import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Spa } from './features/spa/pages/spa/spa';
import { Alojamiento } from './features/alojamiento/pages/alojamiento/alojamiento';
import { Gastronomia } from './features/gastronomia/pages/gastronomia/gastronomia';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'alojamiento', component: Alojamiento },
    { path: 'gastronomia', component: Gastronomia },
    { path: 'spa', component: Spa }
];
