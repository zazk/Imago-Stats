import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './app-home/home.component';
import { DatosComponent } from './app-datos/datos.component';
import { SeccionComponent } from './app-seccion/seccion.component';
import { HeaderComponent } from './app-header/header.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CdkTableModule } from '@angular/cdk/table';

import {
  AngularFirestoreModule,
  AngularFirestore
} from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { SucursalesService } from './services/sucursales.service';
import { PullSavedComponent } from './pull-saved/pull-saved.component';
import { ResultadosSucursalesComponent } from './resultados-sucursales/resultados-sucursales.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ResultadoSucursalComponent } from './resultado-sucursal/resultado-sucursal.component';

const AppRouter: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resultados',
    component: ResultadosComponent
  },
  {
    path: 'pull-saved',
    component: PullSavedComponent
  },
  {
    path: 'resultados-sucursales',
    component: ResultadosSucursalesComponent
  },
  {
    path: 'registrar-sucursales',
    component: SucursalesComponent
  },
  {
    path: 'resultado-sucursal/:codigo',
    component: ResultadoSucursalComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatosComponent,
    ResultadosComponent,
    HeaderComponent,
    SeccionComponent,
    PreguntaComponent,
    RespuestaComponent,
    PullSavedComponent,
    ResultadosSucursalesComponent,
    SucursalesComponent,
    ResultadoSucursalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(AppRouter, { enableTracing: true }),
    CdkTableModule
  ],
  providers: [DataService, SucursalesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({
      timestampsInSnapshots: true
    });
    afs.firestore.enablePersistence();
  }
}
