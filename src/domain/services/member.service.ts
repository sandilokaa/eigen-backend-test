import { MemberDto } from "../../application/dto/member.dto";
import { Members } from "../entities/member.entity";
import { MemberRepository } from "../repositories/member.repository";

export class MemberService {
    private readonly memberRepository: MemberRepository;

    constructor(){
        this.memberRepository = new MemberRepository();
    };

    async getMembers(){
        return this.memberRepository.findAll();
    };

    async createMember(memberData: MemberDto){
        const member = new Members();
        Object.assign(member, memberData);
        return this.memberRepository.save(member);
    };

};