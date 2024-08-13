import { Test, TestingModule } from '@nestjs/testing';
import { RecentSearchCatInfoService } from './recent-search-cat-info.service';

describe('RecentSearchCatInfoService', () => {
  let service: RecentSearchCatInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecentSearchCatInfoService],
    }).compile();

    service = module.get<RecentSearchCatInfoService>(RecentSearchCatInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
