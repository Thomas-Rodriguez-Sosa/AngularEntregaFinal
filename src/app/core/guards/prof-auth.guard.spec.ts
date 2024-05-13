import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { profAuthGuard } from './prof-auth.guard';

describe('profAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => profAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
