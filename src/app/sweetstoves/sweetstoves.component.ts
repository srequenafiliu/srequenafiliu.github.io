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
    {titulo:'Frontend', desc:[`Blog de recetas en el cual se pueden consultar las recetas y usuarios creados.
    Los usuarios, registrados previamente en el menú de registro, pueden añadir nuevas recetas, actualizarlas, modificar sus
    datos de usuario y borrar tanto una de sus recetas como su cuenta.`, `Para realizar todas estas acciones, está web se conecta
    a la API creada en la parte de Back mediante tres servicios: recetas, usuarios y auth. Este último maneja el registro,
    el inicio de sesión y el cambio de contraseña del del usuario.`], modal:[
      {button:"", body:this.modal_body, link:"https://sweetstoves.onrender.com/"}
    ]},
    {titulo:'Backend', desc:[`Proyecto Spring conectado a una base de datos PostgreSQL que genera una API
    donde se puede consultar la información tanto de recetas como de usuarios y permite realizar el CRUD de ambos.`,
    `Los controladores Rest presentes en este proyecto son tres: recetas, usuarios y auth. Este último se encarga de todos
    los métodos que involucren la contraseña del usuario ya que se codifica y/o se genera un token gracias a Spring Security.`,
    `Esta API está paginada, por lo que en cada consulta grupal se mostrarán el número de resultados (count), el link de las
    páginas posterior y anterior (next y previous, respectivamente) y un número de recetas especificado (result).`, `Se puede
    consultar tanto una lista (en el caso de las recetas, con api/recetas) o un elemento en especial (para la receta con id 1,
    se usaría api/recetas/1).`], modal:[
      {button:"Recetas", body:this.modal_body, link:"https://sweetstoves.onrender.com/api/recetas"},
      {button:"Usuarios", body:this.modal_body, link:"https://sweetstoves.onrender.com/api/usuarios"}
    ]}
  ];
}
