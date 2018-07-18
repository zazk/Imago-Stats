import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoSucursalComponent } from './resultado-sucursal.component';

describe('ResultadoSucursalComponent', () => {
  let component: ResultadoSucursalComponent;
  let fixture: ComponentFixture<ResultadoSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
