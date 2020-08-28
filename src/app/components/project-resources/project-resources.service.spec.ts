import { TestBed } from '@angular/core/testing';

import { ProjectResourcesService } from './project-resources.service';

describe('ProjectResourcesService', () => {
  let service: ProjectResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
