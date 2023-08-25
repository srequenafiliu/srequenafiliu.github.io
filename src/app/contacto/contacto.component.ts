import { Component } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  datos_contacto:{link:string, src:string, alt:string, dato:string}[] = [
    {link:'https://api.whatsapp.com/send?phone=%2B34601116985', src:'whatsapp.png', alt:'Icono Whatsapp', dato:'601 11 69 85'},
    {link:'"mailto:sandrarequena1999@gmail.com', src:'email.png', alt:'Icono Email', dato:'sandrarequena1999@gmail.com'},
    {link:'https://www.linkedin.com/in/sandra-requena-filiu/', src:'linkedin.png', alt:'Icono LinkedIn', dato:'Sandra Requena Filiu'}
  ];
  datos_interes:{link:string, src:string, alt:string, dato:string}[] = [
    {link:'https://github.com/srequenafiliu', src:'github.png', alt:'Icono GitHub', dato:'srequenafiliu (Sandra)'},
    {link:'https://github.com/srequenafiliu/srequenafiliu.github.io/tree/main/src/assets/curriculum.pdf', src:'cv.png', alt:'Mi CV', dato:'Currículum'}
  ];
}
