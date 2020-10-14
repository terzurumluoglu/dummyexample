import { TestBed } from '@angular/core/testing';

import { RecordResolverService } from './record-resolver.service';

describe('RecordResolverService', () => {
  let service: RecordResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
