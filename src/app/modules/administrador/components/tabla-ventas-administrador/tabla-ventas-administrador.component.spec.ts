import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVentasAdministradorComponent } from './tabla-ventas-administrador.component';

describe('TablaVentasAdministradorComponent', () => {
  let component: TablaVentasAdministradorComponent;
  let fixture: ComponentFixture<TablaVentasAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaVentasAdministradorComponent]
    });
    fixture = TestBed.createComponent(TablaVentasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
