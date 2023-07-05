import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursoMaterialesComponent } from './view-curso-materiales.component';

describe('ViewCursoMaterialesComponent', () => {
  let component: ViewCursoMaterialesComponent;
  let fixture: ComponentFixture<ViewCursoMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCursoMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursoMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
