import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPadreComponent } from './segundo-padre.component';

describe('SegundoPadreComponent', () => {
  let component: SegundoPadreComponent;
  let fixture: ComponentFixture<SegundoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
