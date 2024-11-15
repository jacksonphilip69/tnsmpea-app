import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), 
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), 
  },
  {
    path: 'payment',
    loadComponent: () => import('./payment/payment.component').then(m => m.PaymentComponent), 
  },
  {
    path: 'statemembers',
    loadComponent: () => import('./state-members/state-members.component').then(m => m.StateMembersComponent), 
  },
  {
    path: 'districtmembers',
    loadComponent: () => import('./district-members/district-members.component').then(m => m.DistrictMembersComponent), 
  },
];
