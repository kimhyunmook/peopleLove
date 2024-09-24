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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeController = void 0;
const common_1 = require("@nestjs/common");
const judge_service_1 = require("./judge.service");
const create_judge_dto_1 = require("./dto/create-judge.dto");
let JudgeController = class JudgeController {
    constructor(judgeService) {
        this.judgeService = judgeService;
    }
    async judgeAi(createLoveJudgeDto, res) {
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
                    res.write(`${char}\n\n`);
                    await new Promise((resolve) => setTimeout(resolve, 10));
                }
            }
        }
        catch (error) {
            res.write(`${error.message}`);
        }
        res.end();
    }
};
exports.JudgeController = JudgeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_judge_dto_1.CreateJudgeDto, Object]),
    __metadata("design:returntype", Promise)
], JudgeController.prototype, "judgeAi", null);
exports.JudgeController = JudgeController = __decorate([
    (0, common_1.Controller)('judge'),
    __metadata("design:paramtypes", [judge_service_1.JudgeService])
], JudgeController);
//# sourceMappingURL=judge.controller.js.map