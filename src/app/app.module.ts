import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {BierkuhHeaderComponent} from './shared/bierkuh-header/bierkuh-header.component';
import {getStorage, provideStorage} from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BierkuhHeaderComponent,
    CoreModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
