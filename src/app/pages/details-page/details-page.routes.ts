import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';

export const routes: Routes = [{ path: ':identifier', component: DetailsPageComponent }];
