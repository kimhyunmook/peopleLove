import { Module } from '@nestjs/common';
import { JudgeService } from './judge.service';
import { JudgeController } from './judge.controller';
import { OpenAiService } from 'src/shared/open-ai/open-ai.service';
import { OpenAiController } from 'src/shared/open-ai/open-ai.controller';
import { OpenAiModule } from 'src/shared/open-ai/open-ai.module';

@Module({
  imports:[OpenAiModule],
  controllers: [JudgeController, OpenAiController],
  providers: [JudgeService, OpenAiService],
})
export class JudgeModule {}
