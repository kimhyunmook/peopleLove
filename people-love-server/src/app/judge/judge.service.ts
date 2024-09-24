import { Injectable } from '@nestjs/common';
import { OpenAiService } from 'src/shared/open-ai/open-ai.service';
import { loveSystemPrompt } from 'src/shared/prompt';
import OpenAI from 'openai';

@Injectable()
export class JudgeService {
  constructor(private openAiService: OpenAiService) {}

  async judgeAi(body) {
    const opeanai =  new OpenAI({
      apiKey: this.openAiService.getApikey(),
    });
    const completion = await opeanai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `${loveSystemPrompt}`,
        },
        {
          role: 'user',
          content: body.text,
        },
      ],
      max_tokens: 2048
    });

    return completion.choices[0].message;
  }
}
