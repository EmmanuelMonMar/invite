import { Routes } from '@angular/router';
import { InviteComponent } from './invite/invite.component';
import { ChurchComponent } from './church/church.component';
import { PartyComponent } from './party/party.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
{ path: 'invitacion', component: InviteComponent },
{ path: 'iglesia', component: ChurchComponent },
{ path: 'recepcion', component: PartyComponent },
{ path: 'detalles', component: DetailsComponent },
{ path: '', redirectTo: '/invitacion', pathMatch: 'full' }
];
