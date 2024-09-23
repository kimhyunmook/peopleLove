import { Controller } from '@nestjs/common';
import { SadJudgeService } from './sad-judge.service';

@Controller('sad-judge')
export class SadJudgeController {
  constructor(private readonly sadJudgeService: SadJudgeService) {}
}
