import { TestBed } from '@angular/core/testing';

import { UsuariosavService } from './usuariosav.service';

describe('UsuariosavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosavService = TestBed.get(UsuariosavService);
    expect(service).toBeTruthy();
  });
});
