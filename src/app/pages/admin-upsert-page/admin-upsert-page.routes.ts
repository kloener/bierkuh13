import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from "@app/core/guards/auth.guard";

export const routes: Routes = [{ path: ':identifier', canActivate: [AuthGuard], loadComponent: () => import('./admin-upsert-page.component').then(m => m.AdminUpsertPageComponent) }];
