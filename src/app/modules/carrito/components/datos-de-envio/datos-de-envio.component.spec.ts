import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeEnvioComponent } from './datos-de-envio.component';

describe('DatosDeEnvioComponent', () => {
  let component: DatosDeEnvioComponent;
  let fixture: ComponentFixture<DatosDeEnvioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosDeEnvioComponent]
    });
    fixture = TestBed.createComponent(DatosDeEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
