import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitProgJavaComponent } from './init-prog-java/init-prog-java.component';
import { InitProgWebComponent } from './init-prog-web/init-prog-web.component';
import { SweetstovesComponent } from './sweetstoves/sweetstoves.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EletaskComponent } from './eletask/eletask.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, title: "Portfolio" },
  { path: 'InitProgJava', component: InitProgJavaComponent, title: "Portfolio | InitProgJava" },
  { path: 'InitProgWeb', component: InitProgWebComponent, title: "Portfolio | InitProgWeb" },
  // { path: 'WDBank', component: WdbankComponent, title: "Portfolio | WDBank" },
  { path: 'SweetStoves', component: SweetstovesComponent, title: "Portfolio | SweetStoves"},
  { path: 'Ele-Task', component: EletaskComponent, title: "Portfolio | Ele-Task"},
  { path: 'contacto', component: ContactoComponent, title: "Portfolio | Información de contacto"},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto (vacía)
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } // Ruta que no coincide con ninguna de las anteriores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
