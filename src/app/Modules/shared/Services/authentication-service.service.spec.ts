import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication-service.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
