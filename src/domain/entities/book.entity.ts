import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BorrowedBooks } from "./borrowed-book.entity";

@Entity()
export class Books {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    title: string;
    
    @Column()
    author: string;

    @Column({ default: 0 })
    stock: number;

    @OneToMany(() => BorrowedBooks, (borrowedBook) => borrowedBook.book)
    borrowedBooks: BorrowedBooks[];
}