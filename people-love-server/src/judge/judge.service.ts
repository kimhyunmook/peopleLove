import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { UpdateJudgeDto } from './dto/update-judge.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JudgeService {
  constructor(private configService: ConfigService) {}

  getApikey(): string {
    return this.configService.get<string>('openAiKey');
  }
  async judgeAi(body) {
    const opeanai = new OpenAI({
      apiKey:this.getApikey()
    });
    const completion = await opeanai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { 
          role: 'system', 
          content: `
            대화를 보고 서로 간의 호감도를 측정해서 서로의 점수로 보여주고 이유도 알려줘 최고 점수는 100점이야
            ???: 70점 
            이유 
            ??? : 80점 
            이유 
            그렇게 생각한 이유를 알려주면서 마무리해

            위 양식외에 단어 추가하지마
            만약 user1, user2가 안보인다면 제대로 된 입력값을 입력해주세요 라고 출력해
          `
        },
        { 
          role: 'user', 
          content: body.text 
        },
      ],
    });

    return completion.choices[0].message;
    // return ``
  }
}
