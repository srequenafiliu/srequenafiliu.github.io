import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitProgJavaComponent } from './init-prog-java/init-prog-java.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, title: "Portfolio" },
  { path: 'init-prog-java', component: InitProgJavaComponent, title: "Portfolio | InitProgJava" },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto (vacía)
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } // Ruta que no coincide con ninguna de las anteriores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
