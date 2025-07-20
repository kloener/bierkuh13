import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [{ path: ':identifier', loadComponent: () => import('./details-page.component').then(m => m.DetailsPageComponent) }];
