import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects:{src:string, link:string, titulo:string}[] = [
    {src:'InitProgJava.png', link:'/InitProgJava', titulo:'InitProgJava'},
    {src:'InitProgWeb.png', link:'/InitProgWeb', titulo:'InitProgWeb'},
    /*{src:'', link:'', titulo:'ProyectoBanco'},
    {src:'', link:'', titulo:'FullStackJavaEOI'},
    {src:'', link:'', titulo:'FullStackWebEOI'},*/
    {src:'SweetStoves.png', link:'/SweetStoves', titulo:'SweetStoves'}
  ];
}
