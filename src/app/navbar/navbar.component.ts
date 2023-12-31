import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title!:string;
  navbar:{link:string, titulo:string}[] = [
    {link:'/inicio', titulo:'Inicio'},
    {link:'/InitProgJava', titulo:'InitProgJava'},
    {link:'/InitProgWeb', titulo:'InitProgWeb'},
    /*{link:'/WDBank', titulo:'WDBank'},
    {link:'', titulo:'FullStackJavaEOI'},
    {link:'', titulo:'FullStackWebEOI'},*/
    {link:'/SweetStoves', titulo:'SweetStoves'},
    {link:'/Ele-Task', titulo:'Ele-Task'}
  ];
}
