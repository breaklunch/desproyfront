import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursoTemasComponent } from './view-curso-temas.component';

describe('ViewCursoTemasComponent', () => {
  let component: ViewCursoTemasComponent;
  let fixture: ComponentFixture<ViewCursoTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCursoTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursoTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
