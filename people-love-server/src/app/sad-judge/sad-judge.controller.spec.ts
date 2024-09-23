import { Test, TestingModule } from '@nestjs/testing';
import { SadJudgeController } from './sad-judge.controller';
import { SadJudgeService } from './sad-judge.service';

describe('SadJudgeController', () => {
  let controller: SadJudgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SadJudgeController],
      providers: [SadJudgeService],
    }).compile();

    controller = module.get<SadJudgeController>(SadJudgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
