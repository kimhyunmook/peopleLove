import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JudgeModule } from './app/judge/judge.module';
import { JudgeController } from './app/judge/judge.controller';
import { JudgeService } from './app/judge/judge.service';
import { ConfigModule } from '@nestjs/config';
import { OpenAiModule } from './shared/open-ai/open-ai.module';
import { OpenAiController } from './shared/open-ai/open-ai.controller';
import { OpenAiService } from './shared/open-ai/open-ai.service';

@Module({
  imports: [
    JudgeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    OpenAiModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, JudgeController,OpenAiController],
  providers: [AppService, JudgeService,OpenAiService],
})
export class AppModule {}
