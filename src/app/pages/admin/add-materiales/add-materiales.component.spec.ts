import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialesComponent } from './add-materiales.component';

describe('AddMaterialesComponent', () => {
  let component: AddMaterialesComponent;
  let fixture: ComponentFixture<AddMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
