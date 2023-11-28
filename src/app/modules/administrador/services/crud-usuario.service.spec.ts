import { TestBed } from '@angular/core/testing';

import { CrudUsuarioService } from './crud-usuario.service';

describe('CrudUsuarioService', () => {
  let service: CrudUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
