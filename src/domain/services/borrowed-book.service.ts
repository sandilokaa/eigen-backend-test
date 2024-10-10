import { BorrowedBookRepository } from "../repositories/borrowed-book.repository";
import { MemberRepository } from "../repositories/member.repository";
import { BookRepository } from "../repositories/book.repository";
import { BorrowedBooks } from "../entities/borrowed-book.entity";

export class BorrowedBookService {
    private readonly borrowedBookRepository: BorrowedBookRepository;
    private readonly memberRepository: MemberRepository;
    private readonly bookRepository: BookRepository;

    constructor(){
        this.borrowedBookRepository = new BorrowedBookRepository();
        this.memberRepository = new MemberRepository();
        this.bookRepository = new BookRepository();
    };

    async borrowBook(memberCode: string, bookCode: string){
        const member = await this.memberRepository.findByCode(memberCode);
        const book = await this.bookRepository.findByCode(bookCode);

        if (!member) throw new Error("Member not found");
        
        if (!book) throw new Error("Book not found");

        if(member.isPenalty === true) throw new Error("Member is being penalized!");

        const borrowedBooks = await this.borrowedBookRepository.findByMember(member.id);
        const activeBorrowedBooks = borrowedBooks.filter(b => !b.returnDate);
        if (activeBorrowedBooks.length >= 2) throw new Error("Member cannot borrow more than 2 books at a time!");
    
        const allBorrowedBooks = await this.borrowedBookRepository.findAll();
        const isBookBorrowed = allBorrowedBooks.some(b => b.book && b.book.id === book.id && !b.returnDate);
        if (isBookBorrowed) throw new Error("This book is already borrowed by other member!");
        
        const borrowedBook = new BorrowedBooks();
        borrowedBook.member = member;
        borrowedBook.book = book;
        borrowedBook.borrowDate = new Date();

        await this.borrowedBookRepository.save(borrowedBook);

        book.stock--;
        await this.bookRepository.save(book);

        return borrowedBook;
    };

    async countBooksBorrowed(memberCode: string) {
        const borrowedBooks = await this.borrowedBookRepository.countBooksBorrowedByMember(memberCode);
        if (!borrowedBooks) throw new Error("Member not found");

        const memberBorrowBook = borrowedBooks[0].member;
        const bookInfo = borrowedBooks.map(b => ({
            title: b.book.title,
            code: b.book.code,
            borrowDate: b.borrowDate
        }));

        return {
            name: memberBorrowBook.name,
            code: memberBorrowBook.code,
            count: bookInfo.length,
            books: bookInfo
        };
    };

    async returnBook(memberCode: string, bookCode: string) {
        const member = await this.memberRepository.findByCode(memberCode);
        const book = await this.bookRepository.findByCode(bookCode);

        if (!member) throw new Error("Member not found");
        
        if (!book) throw new Error("Book not found");

        const borrowedBooks = await this.borrowedBookRepository.findByMember(member.id);
        const borrowedBook = borrowedBooks.find(item => item.member.code === member.code && item.book.id === book.id && !item.returnDate);
        
        if (!borrowedBook) throw new Error("Book not borrowed by member");

        const currentDate = new Date();
        const borrowDuration = Math.floor((currentDate.getTime() - borrowedBook.borrowDate.getTime()) / (1000 * 3600 * 24));

        book.stock++;
        await this.bookRepository.save(book);

        if (borrowDuration > 7) {
            member.isPenalty = true;
            member.penaltyUntil = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
            await this.memberRepository.save(member);
        }

        borrowedBook.returnDate = currentDate;
        await this.borrowedBookRepository.save(borrowedBook);
        
        return borrowedBook;
    };

};