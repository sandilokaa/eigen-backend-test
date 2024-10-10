import { Request, Response } from "express";
import { BorrowedBookService } from "../../domain/services/borrowed-book.service";
import { handleError } from "../../middleware/errorHandler";
import { sendResponse } from "../../utils/response";

export class BorrowedBookController {
    private readonly borrowedBookService: BorrowedBookService;

    constructor(){
        this.borrowedBookService = new BorrowedBookService();
    };

    async borrowBook(req: Request, res: Response) {
        const { memberCode, bookCode } = req.params;
        try {
            const borrowedBook = await this.borrowedBookService.borrowBook(memberCode, bookCode);
            sendResponse(res, 201, borrowedBook);
        } catch (error) {
            handleError(res, error);
        }
    };

    async getCountBorrowedBooks(req: Request, res: Response) {
        const { memberCode } = req.params;
        try {
            const count = await this.borrowedBookService.countBooksBorrowed(memberCode);
            sendResponse(res, 200, { count });
        } catch (error) {
            handleError(res, error);
        }
    }

    async returnBook(req: Request, res: Response){
        const { memberCode, bookCode } = req.params;
        try {
            const returnBook = await this.borrowedBookService.returnBook(memberCode, bookCode);
            sendResponse(res, 201, returnBook);
        } catch (error) {
            handleError(res, error);
        }
    };

};