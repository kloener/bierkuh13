import { appRoutes } from './app/app-routes';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {getStorage, provideStorage} from "@angular/fire/storage";


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideHttpClient(withInterceptors([])),
    provideRouter(appRoutes, withComponentInputBinding()),
  ]
}).catch(err => console.error(err.message ?? 'An unexpected error occurred'))
