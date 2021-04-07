import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  labels: string[] = ['IMPUESTOS', 'PAGINA PRINCIPAL', 'TARJETAS DE CRÉDITO', 'CONSEJOS DE AHORRO', 'FACTURAS'];
  links: string[] = ['/taxs', '/', '/credit-cards', '/saving-tips', '/bills'];

  benefitsGovernment: string[] = [
    'Acceso a la información de los ciudadanos vía web.',
    'Atención inmediata.',
    'Transparencia en la acción gubernamental.',
    'Eficiencia y eficacia en el actuar del gobierno'
  ];

  benefitsCitizenship: string[] = [
    'Identificarse ante terceros.',
    'Firmar documentos electrónicamente.',
    'Evitar la suplantación de identidad.',
    'Proteger la información transmitida'
  ];

  characteristics: any[] = [
    {
      name: "Equivalencia Funcional",
      value: 'La Firma Electrónica tiene la misma validez que la Firma Autógrafa'
    },
    {
      name: "Autenticidad",
      value: "Permite dar certeza de que un documento electrónico o, en su caso, un mensaje de datos ha sido emitido por el firmante, por lo cual es atribuible a él mismo al igual que las consecuencias jurídicas."
    },
    {
      name: "Integridad",
      value: "En un documento electrónico o, en su caso, en un mensaje de datos permite dar certeza de que éste ha permanecido completo e inalterado desde su firma."
    }
  ];

  documents: any[] = [
    {
      name: "Memoria USB",
      value: 'Original'
    },
    {
      name: "Dirección de correo electrónico vigente",
      value: "Original"
    },
    {
      name: "Solicitud de Certificado de e.firma",
      value: "Original"
    }
  ];

  costs: any[] = [
    {
      name: "Trámite",
      value: 'Gratuito'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
