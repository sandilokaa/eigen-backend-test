export interface GetBook {
    code: string;
    title: string;
    author: string;
    stock: number;
}

export interface CreateBook {
    id: number;
    code: string;
    title: string;
    author: string;
    stock: number;
}

export const getBookFormat = (books: GetBook[]): Pick<GetBook, 'code' | 'title' | 'author' | 'stock'>[] => {
    return books.map(({ code, title, author, stock }) => ({ code, title, author, stock }));
}

export const createBookFormat = (book: CreateBook): Pick<CreateBook, 'id' | 'code' | 'title' | 'author' | 'stock'> => {
    return {
        id: book.id,
        code: book.code,
        title: book.title,
        author: book.author,
        stock: book.stock,
    };
}