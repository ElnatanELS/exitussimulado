import { TestBed } from '@angular/core/testing';

import { SimuladoService } from './simulado.service';

describe('SimuladoService', () => {
  let service: SimuladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimuladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
