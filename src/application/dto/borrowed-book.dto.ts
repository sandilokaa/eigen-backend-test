export interface BorrowedBookDto {
    memberId: number;
    bookId: number;
    borrowDate: Date;
    returnDate?: Date;
}