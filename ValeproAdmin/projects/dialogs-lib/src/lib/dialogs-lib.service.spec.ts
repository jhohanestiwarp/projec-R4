import { TestBed } from '@angular/core/testing';

import { DialogsLibService } from './dialogs-lib.service';

describe('DialogsLibService', () => {
  let service: DialogsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
