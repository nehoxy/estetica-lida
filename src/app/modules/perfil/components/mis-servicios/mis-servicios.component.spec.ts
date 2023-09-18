import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosComponent } from './mis-servicios.component';

describe('MisServiciosComponent', () => {
  let component: MisServiciosComponent;
  let fixture: ComponentFixture<MisServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisServiciosComponent]
    });
    fixture = TestBed.createComponent(MisServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
