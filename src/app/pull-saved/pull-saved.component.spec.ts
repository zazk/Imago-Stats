import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullSavedComponent } from './pull-saved.component';

describe('PullSavedComponent', () => {
  let component: PullSavedComponent;
  let fixture: ComponentFixture<PullSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
