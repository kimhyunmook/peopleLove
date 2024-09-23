import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JudgeModule } from './judge/judge.module';
import { JudgeController } from './judge/judge.controller';
import { JudgeService } from './judge/judge.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JudgeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, JudgeController],
  providers: [AppService, JudgeService],
})
export class AppModule {}
