import { Test, TestingModule } from '@nestjs/testing';
import { CatsInfoService } from './cats-info.service';

describe('CatsInfoService', () => {
  let service: CatsInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsInfoService],
    }).compile();

    service = module.get<CatsInfoService>(CatsInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
