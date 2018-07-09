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
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRouter, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
