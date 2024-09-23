import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JudgeService } from './judge.service';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';

@Controller('judge')
export class JudgeController {
  constructor(private readonly judgeService: JudgeService) {}
  @Post()
  judgeAi(@Body() CreateJudgeDto:any):any {
    return this.judgeService.judgeAi(CreateJudgeDto);
  }
}
