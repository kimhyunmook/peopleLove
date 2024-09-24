"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const judge_module_1 = require("./app/judge/judge.module");
const judge_controller_1 = require("./app/judge/judge.controller");
const judge_service_1 = require("./app/judge/judge.service");
const config_1 = require("@nestjs/config");
const open_ai_module_1 = require("./shared/open-ai/open-ai.module");
const open_ai_controller_1 = require("./shared/open-ai/open-ai.controller");
const open_ai_service_1 = require("./shared/open-ai/open-ai.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            judge_module_1.JudgeModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            open_ai_module_1.OpenAiModule,
            config_1.ConfigModule.forRoot(),
        ],
        controllers: [app_controller_1.AppController, judge_controller_1.JudgeController, open_ai_controller_1.OpenAiController],
        providers: [app_service_1.AppService, judge_service_1.JudgeService, open_ai_service_1.OpenAiService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map