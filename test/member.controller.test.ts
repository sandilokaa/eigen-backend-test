import request from "supertest";
import { MemberController } from "../src/application/controllers/member.controller";
import { MemberService } from "../src/domain/services/member.service";
import { Members } from "../src/domain/entities/member.entity";
import { getMemberFormat } from "../src/formatter/member.format";
import app from "../src/app";

const memberService = new MemberService();
const memberController = new MemberController(memberService);

describe('MemberController', () => {
    it('should return all members', async () => {
        const mockMembers: Members[] = [
            {
                id: 2,
                code: "A002",
                name: 'Angangang',
                isPenalty: false,
                penaltyUntil: null,
                borrowedBooks: []
            }
        ];
        
        jest.spyOn(memberController['memberService'], 'getMembers').mockResolvedValue(mockMembers);

        const response = await request(app).get('/api/v1/members');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(getMemberFormat(mockMembers));
    });
});