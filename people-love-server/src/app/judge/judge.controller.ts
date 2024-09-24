import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { JudgeService } from './judge.service';
import { Response } from 'express';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';

@Controller('judge')
export class JudgeController {
  constructor(private readonly judgeService: JudgeService) {}
  // @Post()
  // judgeAi1(@Body() CreateJudgeDto:CreateJudgeDto):any {
  //   return this.judgeService.judgeAi(CreateJudgeDto);
  // }
  @Post()
  async judgeAi(
    @Body() createLoveJudgeDto: CreateJudgeDto,
    @Res() res: Response,
  ) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.status(200);

    const gptResponse = await this.judgeService.judgeAi(createLoveJudgeDto);
    let result = ``;
    try {
      if (gptResponse.content) {
        for (const char of gptResponse.content.toString()) {
          result += char;
          res.write(`${char}\n\n`); // 한 글자씩 EventSource로 전송
          await new Promise((resolve) => setTimeout(resolve, 10)); // 각 글자를 10ms 간격으로 전송
        }
      }
    } catch (error) {
      res.write(`${error.message}`);
    }

    res.end(); // 스트림 종료를 명시적으로 선언
  }
}
