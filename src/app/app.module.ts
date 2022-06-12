import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddConsultaComponent } from './components/add-consulta/add-consulta.component';
import { PacientesListarComponent } from './components/pacientes-listar/pacientes-listar.component';
import { PacientesCadastroComponent } from './components/pacientes-cadastro/pacientes-cadastro.component';
import { MedicosCadastrarComponent } from './components/medicos-cadastrar/medicos-cadastrar.component';
import { MedicosListarComponent } from './components/medicos-listar/medicos-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddConsultaComponent,
    PacientesListarComponent,
    PacientesCadastroComponent,
    MedicosCadastrarComponent,
    MedicosListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
