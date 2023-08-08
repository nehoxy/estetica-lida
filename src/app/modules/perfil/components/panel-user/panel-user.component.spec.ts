import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUserComponent } from './panel-user.component';

describe('PanelUserComponent', () => {
  let component: PanelUserComponent;
  let fixture: ComponentFixture<PanelUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelUserComponent]
    });
    fixture = TestBed.createComponent(PanelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
