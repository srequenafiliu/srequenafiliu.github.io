import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() titulo!:string;
  @Input() etiquetas!:string[];
  @Input() link!:string;
  movil = window.innerWidth<768;
}
