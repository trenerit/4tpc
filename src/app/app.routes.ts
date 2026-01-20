import { Routes } from '@angular/router';
import { Main } from './apartaments/main/main';
import { ApartamentView } from './apartaments/apartament-view/apartament-view';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'main', },
    {path: 'main', component: Main},
    {path: 'view/:id', component: ApartamentView}
];
