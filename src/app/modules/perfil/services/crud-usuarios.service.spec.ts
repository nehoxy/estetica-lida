import { TestBed } from '@angular/core/testing';

import { CrudUsuariosService } from './crud-usuarios.service';

describe('CrudUsuariosService', () => {
  let service: CrudUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
