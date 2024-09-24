"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOpenAiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_open_ai_dto_1 = require("./create-open-ai.dto");
class UpdateOpenAiDto extends (0, mapped_types_1.PartialType)(create_open_ai_dto_1.CreateOpenAiDto) {
}
exports.UpdateOpenAiDto = UpdateOpenAiDto;
//# sourceMappingURL=update-open-ai.dto.js.map