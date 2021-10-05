import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  labels: string[] = ['IMPUESTOS', 'FIRMA ELÉCTRONICA', 'PAGINA PRINCIPAL', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/taxs', '/electronic-signature', '/', '/saving-tips', '/bills'];


  Tarjeta: string = "";
  Debito: string = "";
  Credito: string = "";
  Comoobtener: string = "";
  
  Clasica: string = "";

  Prueba: string = "";
  


  constructor(
    private _sectionService: SectionService
  ) { }
  ngOnInit(): void {

    this._sectionService.getNews(0).subscribe(
      (data) => {

        this.Tarjeta = "";
        this.Debito = "";
        this.Credito="";
        this.Comoobtener="";
        
        this.Clasica="";
        this.Prueba="";
       

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "Tarjeta":
                this.Tarjeta = element["content"]
                break;
              case"Debito":
                this.Debito= element["content"]
                break;
              case"Credito":
              this.Credito = element["content"]
              break;
              case"Comoobtener":
              this.Comoobtener = element["content"]
              break;
              case"Clasica":
              this.Clasica = element["content"]
              break;

              case"Prueba":
              this.Prueba = element["content"]
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


  Costos: any[] = [
    
    {
      name: "Anualidad",
      value: " Algunas tarjetas no tienen anualidad, otras te cobran una cuota fija cada año. Esta cuota varía dependiendo de cada tarjeta."
    },
    {
      name: "Los Intereses",
      value: " Se cobran únicamente cuando no liquidas el pago total del mes antes de la fecha límite de pago."
    },
    {
      name: "Comisiones",
      value: " También varían dependiendo de cada tarjeta y algunas no tienen comisiones. Éstas se pueden cobrar por retirar efectivo de tu tarjeta, consultar el saldo, usar la banca en línea, entre otros servicios, por lo que es importante que conozcas exactamente cuáles y de cuánto son las comisiones. "
    },
    {
      name: "Cargos moratorios",
      value: " Se cobran únicamente en caso de que haya pasado tu fecha límite de pago y no hayas pagado una cantidad igual o superior al pago mínimo "
    }
  ];


  Fechas: any[] = [
    
    {
      name: "Fecha de Facturacion",
      value: " Corresponde al día en el cual el banco hace el corte para facturar las compras que realizaste durante el mes con la tarjeta. Aquí se considerarán todas las compras realizadas desde la fecha de facturación del mes anterior hasta el día mencionado para el cálculo del valor a pagar."
    },
    {
      name: "Fecha Limite de Pago",
      value: " Se refiere al día de plazo máximo en el cual tendrás que realizar el abono de la tarjeta de crédito. Realizar el pago de tu tarjeta por fuera de esta fecha podrá generar intereses de mora."
    }
  ];

  Tipos: any[] = [
    
    {
      name: "Tarjeta Clasica o Estandar",
      value: " utilizada a nivel nacional e internacional. Son las tarjetas clásicas y más populares aceptadas universalmente en comercios y servicios."
    },
    {
      name: "Tarjeta Dorada o Gold",
      value: "  es la tarjeta llamada Oro o Gold o Dorada. Mundialmente reconocida, es una tarjeta prestigiosa."
    },{
      name: "Tarjeta Platinum",
      value: " tarjeta de color gris plateado, para personas con alto poder adquisitivo, con beneficios y servicios exclusivos, para aquellos con un estilo de vida sofisticado."
    },
    {
      name: "Tarjeta Black",
      value: " tarjeta de crédito más exclusiva de todas para clientes de alto perfil socioeconómico y que buscan la excelencia. Ofrece beneficios adicionales, acceso a salones VIP, asistencia global las 24 horas, además otros beneficios exclusivos."
    },
    {
      name: "Tarjetas de Puntos",
      value: " Ofrecen ventajas adicionales como programas de puntos para obtener viajes gratis, ahorrar en gasolina, descuentos en tiendas…"
    }
  ];

  
  goToLink(url: string){
    window.open(url, "_blank");
  }


}
