import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  labels: string[] = ['IMPUESTOS', 'FIRMA ELÉCTRONICA', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/taxs', '/electronic-signature', '/credit-cards', '/saving-tips', '/bills'];
  // titles: string[] = [
  //   '¿Te gustaría obtener una tarjeta de crédito?, aquí te decimos como conseguirla', 
  //   '¿Qué es la firma eléctronica?', 
  //   'Te damos consejos sobre como ahorrar'
  // ];
  new1: string = "";
  new2: string = "";
  new3: string = "";

  constructor(
    private _sectionService: SectionService
  ) { }

  ngOnInit(): void {

    this._sectionService.getNews(5).subscribe(
      (data) => {
        data.forEach(
          data => {
            switch (data["title"]) {
              case "Noticia 1":
                this.new1 = data["content"]
                break;
              case "Noticia 2":
                this.new2 = data["content"]
                break;
              case "Noticia 3":
                this.new3 = data["content"]
                break;
            
              default:
                console.warn("Elemento desconocido proveniente de la base de datos")
                break;
            }
          }
        )
      }
    )

  }

}
