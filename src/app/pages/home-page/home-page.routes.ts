import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';

export const routes: Routes = [{ path: ':page', component: HomePageComponent },{ path: '', redirectTo: '1', pathMatch: 'full' }];
