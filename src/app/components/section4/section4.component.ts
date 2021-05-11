import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {
  labels: string[] = ['IMPUESTOS', 'FIRMA ELÉCTRONICA', 'TARJETAS DE CREDITO', 'PAGINA PRINCIPAL', 'FACTURAS'];
  links: string[] = ['/taxs', '/electronic-signature', '/credit-cards', '/', '/bills'];

  Condusef: string = "";
  Libro: string = "";
  Imcp: string = "";

  constructor(
    
    private _sectionService: SectionService
  ) { }

  ngOnInit(): void {

    this._sectionService.getNews(0).subscribe(
      (data) => {

        this.Condusef = "";
        this.Libro = "";
        this.Imcp = "";
     
       

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "Condusef":
                this.Condusef = element["content"]
                break;
              case"Libro":
                this.Libro= element["content"]
                break;   
                case"Imcp":
                this.Imcp= element["content"]
                break;   
            
              default:
                break;
            }

          }
        )
        

      }
    )

  }


  Ahorro: any[] = [
    {
      name:"Haz un presupuesto mensual,",
      value: 'así sabrás cuánto ganas, cuánto gastas y cuál es tu posibilidad de ahorro.'
    },
    {
      name:"Aprende a distinguir entre necesidades y deseos",
      value: 'así evitaras compras innecesarias.'
    },
    {
      name:"Evita el “gasto hormiga”",
      value: 'ya que con ello podrás tener mayor margen de maniobra.'
    },
    {
      name:"Establece metas para el ahorro",
      value: 'Las cuales puedes dividir en corto, mediano y largo plazo.'
    },
    {
      name:"Antes de confiar tu dinero a alguna institución",
      value: 'verifica que esté debidamente autorizada y regulada por las autoridades.'
    },
    {
      name:"Investiga en cuál cuenta de ahorro te ofrece una mayor tasa de interés",
      value: 'mejor servicio y te cobra menos comisiones.'
    },
    {
      name:"Confirma que la institución que escojas tenga una sucursal cerca de tu casa o trabajo",
      value: 'así evitaras complicaciones al transportarte.'
    },
    {
      name:"Lee el contrato que ofrece la Entidad Financiera que elegiste",
      value: ' antes de firmarlo.'
    },
    {
      name:"Asegúrate de revisar",
      value: ' ordenar y guardar los documentos que amparan todas tus cuentas de ahorro.'
    },
    {
      name:"Designa beneficiarios de tus cuentas de ahorro",
      value: ' ya que ellos recibirán el dinero si tú llegaras a faltar.'
    }

  ];

  
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
