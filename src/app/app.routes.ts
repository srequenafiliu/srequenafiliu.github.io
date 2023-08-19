import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InitProgJavaComponent } from "./init-prog-java/init-prog-java.component";

export const APP_ROUTES:Route[]=[
  { path: 'inicio', component: HomeComponent, title: "Portfolio" },
  { path: 'init-prog-java', component: InitProgJavaComponent, title: "Portfolio | InitProgJava" },
  /*{ path: 'recetas/:id', component: RepiceDetailComponent, title: "SweetStoves | Recetas:" }, // :id es un parámetro (id de la receta)
  { path: 'usuarios', component: UserListComponent, title: "SweetStoves | Usuarios" },
  { path: 'necesidades-especiales', component: NeedsComponent, title: "SweetStoves | Necesidades especiales" },
  { path: 'login', component: UserLoginComponent, title: "SweetStoves | Inicio de sesión" },
  { path: 'registro', component: UserAddComponent, title: "SweetStoves | Registro" },
  { path: 'perfil-usuario', component: UserInfoComponent, title: "SweetStoves | Perfil del usuario", children: [
    { path: 'recetas', component: RepiceListComponent },
    { path: "nueva-receta", component: RepiceManagementComponent },
    { path: "actualizar-receta", component: RepiceManagementComponent },
    { path: "actualizar-cuenta", component: UserUpdateComponent },
    { path: "actualizar-password", component: UserPasswordComponent },
    { path: "borrar-cuenta", component: UserDeleteComponent },
    { path: '', redirectTo: 'recetas', pathMatch: 'full' },
    { path: '**', redirectTo: 'recetas', pathMatch: 'full' }
  ] },*/
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto (vacía)
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } // Ruta que no coincide con ninguna de las anteriores
];
