import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosSucursalesComponent } from './resultados-sucursales.component';

describe('ResultadosSucursalesComponent', () => {
  let component: ResultadosSucursalesComponent;
  let fixture: ComponentFixture<ResultadosSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
