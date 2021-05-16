import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Documento } from 'src/app/models/document.model';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-modify-new',
  templateUrl: './modify-new.component.html',
  styleUrls: ['./modify-new.component.scss']
})
export class ModifyNewComponent implements OnInit {

  sections: any[] = [
    {value: 0, viewValue: 'Impuestos'},
    {value: 1, viewValue: 'Tarjetas de crédito'},
    {value: 2, viewValue: 'Consejos de Ahorro'},
    {value: 3, viewValue: 'Facturas'},
    {value: 4, viewValue: 'Firma Eléctronica'},
    {value: 5, viewValue: 'Principales'}
  ];

  sectionSelected = new FormControl(this.sections[0].viewValue);

  documents: Documento[] = [];

  documentsForm: FormArray = new FormArray([
    new FormGroup({
      name: new FormControl(),
      new: new FormGroup({
        title: new FormControl(),
        content: new FormControl()
      })
    })
  ]);

  constructor(
    private _sectionService: SectionService
  ) {

    this._sectionService.loadCollection(this.sectionSelected.value);

  }

  ngOnInit(): void {

    this._sectionService.documents.subscribe(
      (data) => {
        
        this.documents = data;

        this.documentsForm.clear();
        this.documents.forEach(doc => this.fillDocumentsForm(doc));

      }
    )

  }

  fillDocumentsForm(document: Documento) {

    this.documentsForm.push(
      new FormGroup({
        id: new FormControl(document.id),
        new: new FormGroup({
          title: new FormControl(document.new.title),
          content: new FormControl(document.new.content)
        })
      })
    );

  }

  selectCollection() { this._sectionService.loadCollection(this.sectionSelected.value); }

  updateDocument(index: number) { this._sectionService.updateDocument(new Documento(this.documentsForm.controls[index].value), this.sectionSelected.value); }

}
