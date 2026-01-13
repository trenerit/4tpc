import { Routes } from '@angular/router';
import { Main } from './apartaments/main/main';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'main', },
    {path: 'main', component: Main}
];
