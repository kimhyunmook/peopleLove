"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeService = void 0;
const common_1 = require("@nestjs/common");
const open_ai_service_1 = require("../../shared/open-ai/open-ai.service");
const prompt_1 = require("../../shared/prompt");
const openai_1 = require("openai");
let JudgeService = class JudgeService {
    constructor(openAiService) {
        this.openAiService = openAiService;
    }
    async judgeAi(body) {
        const opeanai = new openai_1.default({
            apiKey: this.openAiService.getApikey(),
        });
        const completion = await opeanai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `${prompt_1.loveSystemPrompt}`,
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
};
exports.JudgeService = JudgeService;
exports.JudgeService = JudgeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [open_ai_service_1.OpenAiService])
], JudgeService);
//# sourceMappingURL=judge.service.js.map