import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Members } from "./member.entity";
import { Books } from "./book.entity";

@Entity()
export class BorrowedBooks {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Members, (member) => member.borrowedBooks)
    @JoinColumn({ name: "member_id"})
    member: Members
    
    @ManyToOne(() => Books, (book) => book.borrowedBooks)
    @JoinColumn({ name: "book_id"})
    book: Books

    @Column({ type: 'timestamp' })
    borrowDate: Date;

    @Column({ type: 'timestamp', nullable: true })
    returnDate: Date;
}