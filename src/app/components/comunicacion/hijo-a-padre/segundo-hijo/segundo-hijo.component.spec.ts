import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoHijoComponent } from './segundo-hijo.component';

describe('SegundoHijoComponent', () => {
  let component: SegundoHijoComponent;
  let fixture: ComponentFixture<SegundoHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
