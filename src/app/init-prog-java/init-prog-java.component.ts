import { Component } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'init-prog-java',
  templateUrl: './init-prog-java.component.html',
  styleUrls: ['./init-prog-java.component.css']
})
export class InitProgJavaComponent {
  titulo = "InitProgJava";
  etiquetas = ["Java", "Maven"];
  link = "https://github.com/srequenafiliu/InitProgJava";
  projects:IProject[] = [
    {titulo:'fundamentosJava', desc:[`Proyecto Maven que recopila mis prácticas iniciales en
    programación. En este proyecto puedes encontrar tanto teoría como ejercicios sobre los
    fundamentos de Java, así como apartados extra que añadí por mi cuenta.`, `Este proyecto
    se ha refactorizado de acuerdo con los conocimientos adquiridos hasta la fecha.`]},
    {titulo:'poo', desc:[`Proyecto Maven que recopila mis estudios en Programación Orientada a Objetos (POO).
    Al igual que en el anterior proyecto, puedes consultar teoría y ejercicios sobre dicho tema.`, `Este proyecto
    se ha refactorizado de acuerdo con los conocimientos adquiridos hasta la fecha.`]}
  ];
}
