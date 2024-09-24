import { OpenAiService } from 'src/shared/open-ai/open-ai.service';
import OpenAI from 'openai';
export declare class JudgeService {
    private openAiService;
    constructor(openAiService: OpenAiService);
    judgeAi(body: any): Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
}
