import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent)},
    // {path: 'register', loadComponent: () => import('./core/pages/register/register.component').then(m => m.RegisterComponent)},
];
