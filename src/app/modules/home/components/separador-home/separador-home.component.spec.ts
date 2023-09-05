import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorHomeComponent } from './separador-home.component';

describe('SeparadorHomeComponent', () => {
  let component: SeparadorHomeComponent;
  let fixture: ComponentFixture<SeparadorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparadorHomeComponent]
    });
    fixture = TestBed.createComponent(SeparadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
