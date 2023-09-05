import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSaberMasComponent } from './modal-saber-mas.component';

describe('ModalSaberMasComponent', () => {
  let component: ModalSaberMasComponent;
  let fixture: ComponentFixture<ModalSaberMasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSaberMasComponent]
    });
    fixture = TestBed.createComponent(ModalSaberMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
