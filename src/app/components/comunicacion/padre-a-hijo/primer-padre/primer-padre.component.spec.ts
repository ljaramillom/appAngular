import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPadreComponent } from './primer-padre.component';

describe('PrimerPadreComponent', () => {
  let component: PrimerPadreComponent;
  let fixture: ComponentFixture<PrimerPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
