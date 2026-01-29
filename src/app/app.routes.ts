import { Routes } from '@angular/router';
import { Main } from './apartaments/main/main';
import { ApartamentView } from './apartaments/apartament-view/apartament-view';
import { DashboardViewComponent } from './dashboard/dashboard-view-component/dashboard-view-component';
import { ClientsViewComponent } from './clients/clients-view-component/clients-view-component';
import { SettingsViewComponent } from './settings/settings-view-component/settings-view-component';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardViewComponent},
    {path: 'apartaments', component: Main},
    {path: 'clients', component: ClientsViewComponent},
    {path: 'settings', component: SettingsViewComponent, resolve: {test: 'test'}},
    {path: 'view/:id', component: ApartamentView}
];
