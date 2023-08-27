import { Component } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'sweetstoves',
  templateUrl: './sweetstoves.component.html',
  styleUrls: ['./sweetstoves.component.css']
})
export class SweetstovesComponent {
  titulo = "SweetStoves";
  etiquetas = ["Angular", "Bootstrap", "Java", "Spring"];
  link = "https://github.com/srequenafiliu/SweetStoves";
  modal_body = `Este servicio web está alojado en un servidor gratuito de Render. Por tanto,
  este servidor se apaga tras pasar 15 minutos sin actividad y puede tardar en encenderse de nuevo.`;
  projects:IProject[] = [
    {titulo:'Frontend', desc:[`Descripción del front`], modal:[
      {button:"", body:this.modal_body, link:"https://sweetstoves.onrender.com/"}
    ]},
    {titulo:'Backend', desc:[`Descripción del back`], modal:[
      {button:"Recetas", body:this.modal_body, link:"https://sweetstoves.onrender.com/api/recetas"},
      {button:"Usuarios", body:this.modal_body, link:"https://sweetstoves.onrender.com/api/usuarios"}
    ]}
  ];
}
