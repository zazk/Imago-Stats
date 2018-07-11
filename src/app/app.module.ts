import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './app-home/home.component';
import { DatosComponent } from './app-datos/datos.component';
import { SeccionComponent } from './app-seccion/seccion.component';
import { HeaderComponent } from './app-header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { DataService } from './services/data.service';

const AppRouter: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatosComponent,
    HeaderComponent,
    SeccionComponent,
    PreguntaComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot(AppRouter, { enableTracing: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
