import { Component } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'init-prog-web',
  templateUrl: './init-prog-web.component.html',
  styleUrls: ['./init-prog-web.component.css']
})
export class InitProgWebComponent {
  titulo = "InitProgWeb";
  etiquetas = ["HTML", "CSS", "TypeScript", "Bootstrap"];
  link = "https://github.com/srequenafiliu/InitProgWeb";
  projects:IProject[] = [
    {titulo:'Arrays', link:"https://initprogweb.onrender.com/arrays.html"},
    {titulo:'Formularios', link:"https://initprogweb.onrender.com/formularios.html"},
    {titulo:'Funciones', link:"https://initprogweb.onrender.com/funciones.html"}
  ];
  projects2:IProject[] = [
    {titulo:'Tablas', link:"https://initprogweb.onrender.com/tablas.html"},
    {titulo:'Apartados extra', link:"https://initprogweb.onrender.com/extra.html"}
  ];
}
