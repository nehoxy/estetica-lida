import { TestBed } from '@angular/core/testing';

import { CrudPerfilService } from './crud-perfil.service';

describe('CrudPerfilService', () => {
  let service: CrudPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
