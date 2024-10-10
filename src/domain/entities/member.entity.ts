import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BorrowedBooks } from "./borrowed-book.entity";

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({ default: false })
    isPenalty: boolean;

    @Column({ type: 'timestamp', nullable: true })
    penaltyUntil: Date | null;

    @OneToMany(() => BorrowedBooks, (borrowedBook) => borrowedBook.member)
    borrowedBooks: BorrowedBooks[];
}