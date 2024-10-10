export interface MemberDto{
    id: number;
    code: string;
    name: string;
    isPenalty?: boolean;
    penaltyUntil?: Date | null;
    borrowedBooks: [];
}