import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEstaticasComponent } from './cards-estaticas.component';

describe('CardsEstaticasComponent', () => {
  let component: CardsEstaticasComponent;
  let fixture: ComponentFixture<CardsEstaticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsEstaticasComponent]
    });
    fixture = TestBed.createComponent(CardsEstaticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
