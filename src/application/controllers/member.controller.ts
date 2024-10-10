import { Request, Response } from "express";
import { MemberService } from "../../domain/services/member.service";
import { handleError } from "../../middleware/errorHandler";
import { sendResponse } from "../../utils/response";
import { getMemberFormat, createMemberFormat } from "../../formatter/member.format";
import { MemberDto } from "../dto/member.dto";

export class MemberController {
    private readonly memberService: MemberService;

    constructor(memberService: MemberService){
        this.memberService = new MemberService();
    };

    async getMembers(req: Request, res: Response){
        try {
            const members = await this.memberService.getMembers();
            sendResponse(res, 200, getMemberFormat(members));
        } catch (error) {
            handleError(res, error);
        }
    };

    async createMember(req: Request, res: Response) {
        const memberData: MemberDto = req.body;
        try {
            const createdMember = await this.memberService.createMember(memberData);
            sendResponse(res, 201, createMemberFormat(createdMember));
        } catch (error) {
            handleError(res, error);
        }
    };
    
};