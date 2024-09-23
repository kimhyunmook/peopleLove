import { Module } from '@nestjs/common';
import { SadJudgeService } from './sad-judge.service';
import { SadJudgeController } from './sad-judge.controller';

@Module({
  controllers: [SadJudgeController],
  providers: [SadJudgeService],
})
export class SadJudgeModule {}
