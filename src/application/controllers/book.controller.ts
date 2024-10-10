import { Request, Response } from "express";
import { BookService } from "../../domain/services/book.service";
import { handleError } from "../../middleware/errorHandler";
import { sendResponse } from "../../utils/response";
import { getBookFormat, createBookFormat } from "../../formatter/book.format";
import { BookDto } from "../dto/book.dto";

export class BookController {
    private readonly bookService: BookService;

    constructor(){
        this.bookService = new BookService();
    };

    async getAvailableBooks(req: Request, res: Response){
        try {
            const books = await this.bookService.getAvailableBooks();
            sendResponse(res, 200, getBookFormat(books));
        } catch (error) {
            handleError(res, error)
        }
    };

    async createBook(req: Request, res: Response) {
        const bookData: BookDto = req.body;
        try {
            const createdBook = await this.bookService.createBook(bookData);
            sendResponse(res, 201, createBookFormat(createdBook));
        } catch (error) {
            handleError(res, error);
        }
    };
};