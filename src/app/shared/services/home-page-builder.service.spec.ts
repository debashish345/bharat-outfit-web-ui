import { TestBed } from '@angular/core/testing';

import { HomePageBuilderService } from './home-page-builder.service';

describe('HomePageBuilderService', () => {
  let service: HomePageBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
