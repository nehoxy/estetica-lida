import { TestBed } from '@angular/core/testing';

import { CrudServiciosService } from './crud-servicios.service';

describe('CrudServiciosService', () => {
  let service: CrudServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
