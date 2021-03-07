import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  labels: string[] = ['IMPUESTOS', 'FIRMA ELÉCTRONICA', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/taxs', '/electronic-signature', '/credit-cards', '/saving-tips', '/bills'];
  titles: string[] = [
    '¿Te gustaría obtener una tarjeta de crédito?, aquí te decimos como conseguirla', 
    '¿Qué es la firma eléctronica?', 
    'Te damos consejos sobre como ahorrar'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  redirectToSection(i: number){
    switch (i) {
      case 0:
        console.log(i)
        break;
      case 1:
        console.log(i)
        break;
      case 2:
        console.log(i)
        break;
      case 3:
        console.log(i)
        break;
      case 4:
        console.log(i)
        break;
    
      default:
        break;
    }
  }

}
