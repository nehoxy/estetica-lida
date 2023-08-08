import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicioComponent } from './card-servicio.component';

describe('CardServicioComponent', () => {
  let component: CardServicioComponent;
  let fixture: ComponentFixture<CardServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardServicioComponent]
    });
    fixture = TestBed.createComponent(CardServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
