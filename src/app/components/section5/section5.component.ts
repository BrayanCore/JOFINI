import { Component, OnInit } from '@angular/core';

import { SectionService } from 'src/app/services/section.service';
@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

  labels: string[] = ['IMPUESTOS', 'FIRMA ELÉCTRONICA', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'PAGINA PRINCIPAL'];
  links: string[] = ['/taxs', '/electronic-signature', '/credit-cards', '/saving-tips', '/'];

  definition = '';

  obligadosFacturar = '';

  emitInvoices: string[] = [];

  typesInvoice: string[] = [];

  characteristics: string[] = [];

  title1: string = '';
  title2: string = '';
  title3: string = '';
  title4: string = '';
  title5: string = '';
  title6: string = '';
  link: string = '';
  subtitle3: string = '';

  constructor(
    private _sectionService: SectionService,
  ) {
  }

  ngOnInit(): void {

    this._sectionService.getNews(3).subscribe(
      (data) => {

        this.definition = '';
        this.obligadosFacturar = '';
        this.emitInvoices = [];
        this.typesInvoice = [];
        this.characteristics = [];

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "Titulo 1":
                this.title1 = element["content"];
              break;
              case "Titulo 2":
                this.title2 = element["content"];
              break;
              case "Titulo 3":
                this.title3 = element["content"];
              break;
              case "Titulo 4":
                this.title4 = element["content"];
              break;
              case "Titulo 5":
                this.title5 = element["content"];
              break;
              case "Titulo 6":
                this.title6 = element["content"];
              break;
              case "Link":
                this.link = element["content"];
              break;
              case "Definicion":
                this.definition = element["content"];
              break;
              case "Subtitulo 3":
                this.subtitle3 = element["content"];
              break;
              case "Caracteristica":
                this.characteristics.push(element["content"]);
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

  goToLink(url: any): void {

    if (typeof url === 'string') {

      // Hacer prueba aquí
      window.open(url, "_blank");
    
    } else {
    
      this._sectionService.handleError("URL inválido", "URL no encontrada")

    }

  }

}
