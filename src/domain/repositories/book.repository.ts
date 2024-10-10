import AppDataSource from "../../infrastructure/database/typeorm.config";
import { Books } from "../entities/book.entity";
import { MoreThan, Repository } from "typeorm";

export class BookRepository {
    private readonly repository: Repository<Books>;

    constructor(){
        this.repository = AppDataSource.getRepository(Books);
    }

    async findAll(): Promise<Books[]> {
        return this.repository.find();
    };

    async findByCode(code: string): Promise<Books | null> {
        return this.repository.findOneBy({ code });
    };

    async findAvailableBooks(): Promise<Books[]>{
        return this.repository.find({ where: { stock: MoreThan(0) }});
    };

    async save(bookData: Books): Promise<Books> {
        return this.repository.save(bookData);
    }

};