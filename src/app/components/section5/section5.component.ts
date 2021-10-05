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
              case "Definicion":
                this.definition = element["content"];
                break;
              case "ObligadosFacturar":
                this.obligadosFacturar = element["content"];
                break;
              case "emitir":
                this.emitInvoices.push(element["content"]);
                break;
              case "Tipo":
                this.typesInvoice.push(element["content"]);
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
