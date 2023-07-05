import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursosComponent } from './view-cursos.component';

describe('ViewCursosComponent', () => {
  let component: ViewCursosComponent;
  let fixture: ComponentFixture<ViewCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
