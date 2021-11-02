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

  firma: string = "";

  repudio: string = "";

  opciones: string[] = [];

  presencial1: string[] = [];
  presencial2: string[] = [];

  confidencialidad: string[] = [];

  integridad: string[] = [];

  autenticacion: any[] = [];

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


        this.firma="";

        this.repudio = "";
        this.opciones = [];
        this.presencial1 = [];
        this.presencial2 = [];
        this.confidencialidad = [];
        this.integridad = [];
        this.autenticacion = [];
        this.documents = [];

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "firma":
                this.firma = element["content"]
                break;
              case "Repudio":
                this.repudio = element["content"]
                break;
              case "Opciones":
                this.opciones.push(element["content"])
                break;
              case "Presencial1":
                this.presencial1.push(element["content"])
                break;
                case "Presencial2":
                  this.presencial2.push(element["content"])
                  break;
              case "Confidencialidad":
                this.confidencialidad.push(element["content"])
                break;
              case "Integridad":
                this.integridad.push(element["content"])
                break;
              case "Autenticacion":
                this.autenticacion.push(element["content"])
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
