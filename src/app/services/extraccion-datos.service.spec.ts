import { TestBed } from '@angular/core/testing';

import { ExtraccionDatosService } from './extraccion-datos.service';

describe('ExtraccionDatosService', () => {
  let service: ExtraccionDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraccionDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
