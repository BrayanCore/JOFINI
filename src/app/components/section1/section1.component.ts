import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

 
  labels: string[] = ['PAGINA PRINCIPAL', 'FIRMA ELÉCTRONICA', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/', '/electronic-signature', '/credit-cards', '/saving-tips', '/bills'];


  Impuestos: string = "";

  definition: string = "";

  queessat: string = "";

  utilidad: string ="";

  contribuyentes: string="";
  
  Federales: string="";
  FederalesInfo: string="";
  Estatales: string="";
  EstatalesInfo: string="";
  Municipales: string="";
  MunicipalesInfo: string="";

  constructor(
    private _sectionService: SectionService
  ) { }

  ngOnInit(): void {

    this._sectionService.getNews(0).subscribe(
      (data) => {

        this.Impuestos = "";
        this.definition = "";
        this.queessat="";
        this.utilidad="";
        this.contribuyentes="";
        
        this.Federales="";
        this.FederalesInfo="";
        this.Estatales="";
        this.EstatalesInfo="";

        this.Municipales="";
        this.MunicipalesInfo="";

        data.forEach(
          element => {
            
            switch (element["title"]) {
              case "Impuestos":
                this.Impuestos = element["content"]
                break;
              case"utilidad":
                this.utilidad= element["content"]
                break;
              case"queessat":
              this.queessat = element["content"]
              break;
              case"contribuyentes":
              this.contribuyentes = element["content"]
              break;
            
              case"Federales":
              this.Federales = element["content"]
              break;

              case"FederalesInfo":
              this.FederalesInfo = element["content"]
              break;

              case"Estatales":
              this.Estatales = element["content"]
              break;

              case"EstatalesInfo":
              this.EstatalesInfo = element["content"]
              break;

              case"Municipales":
              this.Municipales = element["content"]
              break;

              case"MunicipalesInfo":
              this.MunicipalesInfo = element["content"]
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


  pasosdeclarar: any[] = [
    {
      name:"1",
      value: 'Ingresa directamente a la página web del SAT.'
    },
    {
      name:"2",
      value: 'Accede a tu cuenta con tu tecleando tu RFC y contraseña o E.firma.'
    },
    {
      name:"3",
      value: 'Llena con cuidado los datos que te solicitan.'
    },
    {
      name:"4",
      value: 'Firma tu declaración'
    },
    {
      name:"5",
      value: 'Envíala.'
    },
    {
      name:"6",
      value: 'Revisa que el sistema te haya devuelto tu acuse de recibo.'
    },
    {
      name:"7",
      value: 'Tu proceso terminará aquí si tu declaración resulta en ceros o con saldo a favor.'
    },
    {
      name:"8",
      value: 'Por el contrario, si la declaración resultó con la necesidad de hacer un pago, hazlo por medio de transferencia bancaria.'
    }

  ];

  tiposImpuestos: any[] = [
    
    {
      name: "Impuestos Federales",
      value: " Como lo son el Impuesto sobre la renta (ISR), el Impuesto al Valor Agregado (IVA), el Impuesto Especial sobre Producción y Servicios (IEPS) y el Impuesto sobre Automóviles Nuevos (ISAN)"
    },
    {
      name: "Impuestos Estatales",
      value: " Son aquellos que se aplican dentro de la frontera de cada estado y no se trasladan a otros. Cada estado cuenta con una norma tributaria o Ley de Hacienda diferente en la que se especifican qué impuestos se cobran en cada uno de ellos"
    },
    {
      name: "Impuestos Municipales",
      value: " Este tipo de impuestos se generan en favor de los gobiernos locales, y entre ellos destacan: el predial, el impuesto para el fomento deportivo y educacional, el impuesto para el mantenimiento y conservación de las vías públicas, el impuesto por alumbrado público, entre otros. "
    }
  ];

  elementos: any[] = [
    {
      name: "Hecho imponible",
      value: 'La situación o actividad que motiva la obligación tributaria.'
    },
    {
      name: "Sujeto pasivo",
      value: "La persona u organización que enfrenta la obligación."
    },
    {
      name: "Base imponible",
      value: "El monto sobre el que se aplica el impuesto."
    },
    {
      name: "Tipo de gravamen",
      value: "Se trata de la proporción que se aplica a la base imponible para calcular el monto a pagar."
    },
    {
      name: "Cuota tributaria",
      value: "Es la cantidad que se debe pagar."
    }
  ];

  tiposcontribuyentes: any[] = [
    {
      name: "Personas Fisicas",
      value: 'se entiende por persona física todo individuo registrado ante la Secretaría de Hacienda y Crédito Público que realiza actividades que le genera ingresos, es decir, personas que trabajan, comercializan o son dueños de algún bien inmueble.'
    },
    {
      name: "Asalariados",
      value: 'Son las personas que reciben un sueldo y prestaciones por llevar a cabo un trabajo. Estas aportaciones corren a cargo de un empleador (también conocido como patrón)'
    },
    {
      name: "Honorarios",
      value: 'Son los que prestan servicios de manera independiente a compañías, al gobierno o inclusive a otras personas físicas. Aquí entran los llamados freelancers, personas que no dependen necesariamente de un patrón.'
    },
    {
      name: "Actividades Empresariales",
      value: 'Son aquellos que tienen una empresa que realiza actividades de índole comercial, pesca, agrícola, transporte, industrial, de servicios, etc.'
    },
    {
      name: "Incorporación Fiscal",
      value: 'Aquí entran los que hagan actividades empresariales, presten servicios, venden bienes u obtienen ingresos por intereses. Cabe aclarar que, por lo general, los que pertenecen a este régimen no necesariamente cuentan con un título profesional.'
    },
    {
      name: "Arrendatario",
      value: 'Son personas físicas que reciben ingresos por rentar bienes inmuebles. Es importante aclarar que este tipo de régimen no es excluyente, es decir, se puede sumar a los otros.'
    }
  ];

  pasos: any[] = [
    {
      name: "Personas Fisicas",
      value: 'se entiende por persona física todo individuo registrado ante la Secretaría de Hacienda y Crédito Público que realiza actividades que le genera ingresos, es decir, personas que trabajan, comercializan o son dueños de algún bien inmueble.'
    },
    {
      name: "Asalariados",
      value: 'Son las personas que reciben un sueldo y prestaciones por llevar a cabo un trabajo. Estas aportaciones corren a cargo de un empleador (también conocido como patrón)'
    },
    {
      name: "Honorarios",
      value: 'Son los que prestan servicios de manera independiente a compañías, al gobierno o inclusive a otras personas físicas. Aquí entran los llamados freelancers, personas que no dependen necesariamente de un patrón.'
    },
    {
      name: "Actividades Empresariales",
      value: 'Son aquellos que tienen una empresa que realiza actividades de índole comercial, pesca, agrícola, transporte, industrial, de servicios, etc.'
    },
    {
      name: "Incorporación Fiscal",
      value: 'Aquí entran los que hagan actividades empresariales, presten servicios, venden bienes u obtienen ingresos por intereses. Cabe aclarar que, por lo general, los que pertenecen a este régimen no necesariamente cuentan con un título profesional.'
    },
    {
      name: "Arrendatario",
      value: 'Son personas físicas que reciben ingresos por rentar bienes inmuebles. Es importante aclarar que este tipo de régimen no es excluyente, es decir, se puede sumar a los otros.'
    }
  ];

  

  goToLink(url){
    
    if (typeof url === 'string') {

      // Hacer prueba aquí
      window.open(url, "_blank");
    
    } else {
    
      this._sectionService.handleError("URL inválido", "URL no encontrada")

    }

  }

}


