import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNewComponent } from './modify-new.component';

describe('ModifyNewComponent', () => {
  let component: ModifyNewComponent;
  let fixture: ComponentFixture<ModifyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
