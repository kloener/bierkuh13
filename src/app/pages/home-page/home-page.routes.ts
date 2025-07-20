import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [{ path: ':page', loadComponent: () => import('./home-page.component').then(m => m.HomePageComponent) },{ path: '', redirectTo: '1', pathMatch: 'full' }];
