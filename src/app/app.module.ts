import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InitProgJavaComponent } from './init-prog-java/init-prog-java.component';
import { SweetstovesComponent } from './sweetstoves/sweetstoves.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { InitProgWebComponent } from './init-prog-web/init-prog-web.component';
import { EletaskComponent } from './eletask/eletask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InitProgJavaComponent,
    InitProgWebComponent,
    SweetstovesComponent,
    ContactoComponent,
    HeaderComponent,
    ProjectCardComponent,
    EletaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
