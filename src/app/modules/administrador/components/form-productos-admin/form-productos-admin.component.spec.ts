import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductosAdminComponent } from './form-productos-admin.component';

describe('FormProductosAdminComponent', () => {
  let component: FormProductosAdminComponent;
  let fixture: ComponentFixture<FormProductosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductosAdminComponent]
    });
    fixture = TestBed.createComponent(FormProductosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
