import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAiService {
  constructor(private configService: ConfigService) {}

  getApikey(): string {
    return this.configService.get<string>('openAiKey');
  }
}
