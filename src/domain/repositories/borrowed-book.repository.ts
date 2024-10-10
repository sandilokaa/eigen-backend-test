import AppDataSource from "../../infrastructure/database/typeorm.config";
import { BorrowedBooks } from "../entities/borrowed-book.entity";
import { Repository } from "typeorm";

export class BorrowedBookRepository {
    private readonly repository: Repository<BorrowedBooks>;

    constructor(){
        this.repository = AppDataSource.getRepository(BorrowedBooks);
    };

    async save(borrowedBooks: BorrowedBooks): Promise<BorrowedBooks>{
        return this.repository.save(borrowedBooks);
    };

    async findByMember(memberId: number): Promise<BorrowedBooks[]>{
        return this.repository.find({ 
            where: { member: { id: memberId } }, 
            relations: ["book", "member"]
        });
    };

    async findAll(): Promise<BorrowedBooks[]>{
        return this.repository.find({ relations: ["book", "member"]});
    };

    async countBooksBorrowedByMember(memberCode: string){
        return await this.repository.find({
            where: { member: { code: memberCode } },
            relations: ["book", "member"],
        });
    };

};