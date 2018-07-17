import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPromediosComponent } from './resultados-promedios.component';

describe('ResultadosPromediosComponent', () => {
  let component: ResultadosPromediosComponent;
  let fixture: ComponentFixture<ResultadosPromediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosPromediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPromediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
