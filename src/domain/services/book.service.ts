import { BookDto } from "../../application/dto/book.dto";
import { Books } from "../entities/book.entity";
import { BookRepository } from "../repositories/book.repository";

export class BookService {
    private readonly bookRepository: BookRepository;

    constructor(){
        this.bookRepository = new BookRepository();
    };

    async getAvailableBooks(){
        return this.bookRepository.findAvailableBooks();
    };

    async createBook(bookData: BookDto){
        const book = new Books();
        Object.assign(book, bookData);
        return this.bookRepository.save(book);
    }

};