import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']

})
export class Section2Component implements OnInit {

  labels: string[] = ['IMPUESTOS', 'PAGINA PRINCIPAL', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/taxs', '/', '/credit-cards', '/saving-tips', '/'];

  definition: string = "";

  uses: string[] = [];

  examples: string[] = [];

  benefitsGovernment: string[] = [];

  benefitsCitizenship: string[] = [];

  characteristics: any[] = [];

  documents: any[] = [];

  costs: any[] = [
    {
      name: "Trámite",
      value: 'Gratuito'
    }
  ];

  constructor(
    private _sectionService: SectionService
    // ,
    // private _YouTubePlayerModule: YouTubePlayerModule
  ) { }

  ngOnInit(): void {

    this._sectionService.getNews(1).subscribe(
      (data) => {

        this.definition = "";
        this.uses = [];
        this.examples = [];
        this.benefitsGovernment = [];
        this.benefitsCitizenship = [];
        this.characteristics = [];
        this.documents = [];

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "Definicion":
                this.definition = element["content"]
                break;
              case "Uso 1":
                this.uses.push(element["content"])
                break;
              case "Uso 2":
                this.uses.push(element["content"])
                break;
              case "Ejemplo":
                this.examples.push(element["content"])
                break;
              case "Gobierno":
                this.benefitsGovernment.push(element["content"])
                break;
              case "Ciudadania":
                this.benefitsCitizenship.push(element["content"])
                break;
              case "Equivalencia Funcional":
                this.characteristics.push(
                  {
                    name: element["title"],
                    value: element["content"]
                  }
                )
                break;
              case "Autenticidad":
                this.characteristics.push(
                  {
                    name: element["title"],
                    value: element["content"]
                  }
                )
                break;
              case "Integridad":
                this.characteristics.push(
                  {
                    name: element["title"],
                    value: element["content"]
                  }
                )
                break;
              case "Documento":
                this.documents.push(
                  {
                    name: element["content"],
                    value: "Original"
                  }
                );
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

  goToLink(url){

    if (typeof url === 'string') {

      // Hacer prueba aquí
      window.open(url, "_blank");
    
    } else {
    
      this._sectionService.handleError("URL inválido", "URL no encontrada")

    }

  }

}
