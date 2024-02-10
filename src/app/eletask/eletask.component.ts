import { Component } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'eletask',
  templateUrl: './eletask.component.html',
  styleUrls: ['./eletask.component.css']
})
export class EletaskComponent {
  titulo = "Ele-Task";
  etiquetas = ["Angular", "Bootstrap", "Python", "Flask"];
  link = "https://github.com/srequenafiliu/Ele-Task";
  modal_body_front = `Puede que al principio no pueda ver ni la lista de usuarios ni su cuenta. Eso se debe a que el servidor
  se está encendiendo, por lo que se debe refrescar la página para que aparezcan los datos.`;
  modal_body_back = `Para esta prueba se ha cambiado la base de datos MySQL por una base de datos SQLite almacenada en Replit.`;
  projects:IProject[] = [
    {titulo:'Frontend', desc:[`Aplicación web en la cual los usuarios registrados pueden añadir tareas y hacer un seguimiento
    de estas. Las tareas solo podrán ser vistas y manipuladas por sus creadores para aumentar así la seguridad de esta app.`,
    `Para realizar todas estas acciones, está web se conecta a la API creada en la parte de Back mediante tres servicios:
    tareas, usuarios y auth.`],
    modal:[
      {button:"", body:this.modal_body_front, link:"https://ele-task.onrender.com/"}
    ]},
    {titulo:'Backend', desc:[`Proyecto Flask conectado a una base de datos MySQL que genera una API
    donde se puede consultar la información tanto de tareas como de usuarios y permite realizar el CRUD de ambos.`,
    `Las rutas principales de esta API son tres: tareas, usuarios y auth. Esta última se encarga de los métodos
    de registro, inicio de sesión y cambio de contraseña.`],
    modal:[
      {button:"", body:this.modal_body_back, link:"https://00b647c9-a978-4a64-a545-cbeca93d8a43-00-2e7u5s8ms9hz4.spock.replit.dev/"}
    ]}
  ];
}
