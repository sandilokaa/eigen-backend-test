import AppDataSource from "../../infrastructure/database/typeorm.config";
import { Members } from "../entities/member.entity";
import { Repository } from "typeorm";

export class MemberRepository {
    private readonly repository: Repository<Members>;

    constructor() {
        this.repository = AppDataSource.getRepository(Members);
    };

    async findAll(): Promise<Members[]>{
        return this.repository.find();
    };

    async findByCode(code: string): Promise<Members | null>{
        return this.repository.findOneBy({ code });
    };

    async save(member: Members): Promise<Members> {
        return this.repository.save(member);
    };

};