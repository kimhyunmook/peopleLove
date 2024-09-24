import { JudgeService } from './judge.service';
import { Response } from 'express';
import { CreateJudgeDto } from './dto/create-judge.dto';
export declare class JudgeController {
    private readonly judgeService;
    constructor(judgeService: JudgeService);
    judgeAi(createLoveJudgeDto: CreateJudgeDto, res: Response): Promise<void>;
}
