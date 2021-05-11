import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { New } from 'src/app/models/section.model';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
  providers: [SectionService]
})
export class AddNewComponent implements OnInit {

  sections: any[] = [
    {value: 0, viewValue: 'Impuestos'},
    {value: 1, viewValue: 'Tarjetas de crédito'},
    {value: 2, viewValue: 'Consejos de Ahorro'},
    {value: 3, viewValue: 'Facturas'},
    {value: 4, viewValue: 'Firma Eléctronica'},
    {value: 5, viewValue: 'Principales'}
  ];

  sectionSelected = new FormControl(this.sections[0].value);

  newForm = new FormGroup({
    title: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required)
  });

  constructor(
    private _sectionService: SectionService
  ) {}

  ngOnInit(): void {

    for (const iterator of this.sections) {
      this._sectionService.getNews(iterator.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }

  }


  addNew() {

    let newToAdd = {} as New;
    newToAdd.content = this.newForm.controls.content.value;
    newToAdd.title = this.newForm.controls.title.value;

    this._sectionService.addNew(newToAdd, this.sections[this.sectionSelected.value].viewValue);
    this.newForm.reset();
    this.sectionSelected.setValue(this.sections[0].value);

  }

}
