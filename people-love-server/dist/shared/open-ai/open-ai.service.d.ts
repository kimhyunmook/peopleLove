import { ConfigService } from '@nestjs/config';
export declare class OpenAiService {
    private configService;
    constructor(configService: ConfigService);
    getApikey(): string;
}
