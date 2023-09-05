import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiciosAdminComponent } from './form-servicios-admin.component';

describe('FormServiciosAdminComponent', () => {
  let component: FormServiciosAdminComponent;
  let fixture: ComponentFixture<FormServiciosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormServiciosAdminComponent]
    });
    fixture = TestBed.createComponent(FormServiciosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
