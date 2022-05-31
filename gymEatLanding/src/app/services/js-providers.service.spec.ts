import { TestBed } from '@angular/core/testing';

import { JsProvidersService } from './js-providers.service';

describe('JsProvidersService', () => {
  let service: JsProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
