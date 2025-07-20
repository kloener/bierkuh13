import { AuthGuard } from '@app/core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBeerBrandsPageComponent } from './admin-beer-brands-page.component';

export const routes: Routes = [{ path: '', canActivate: [AuthGuard], component: AdminBeerBrandsPageComponent }];
