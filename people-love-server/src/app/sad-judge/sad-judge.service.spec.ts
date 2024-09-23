import { Test, TestingModule } from '@nestjs/testing';
import { SadJudgeService } from './sad-judge.service';

describe('SadJudgeService', () => {
  let service: SadJudgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SadJudgeService],
    }).compile();

    service = module.get<SadJudgeService>(SadJudgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
