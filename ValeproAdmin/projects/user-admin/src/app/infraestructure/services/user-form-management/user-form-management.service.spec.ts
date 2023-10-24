import { TestBed } from '@angular/core/testing';
import { UserFormManagementService } from './user-form-management.service';

describe('UserFormManagementService', () => {
  let service: UserFormManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
