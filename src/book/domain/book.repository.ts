import { Book } from "./book.entity";

export interface IBookRepository {
    insert(book: Book): Promise<void>; // Use IBook em vez de Book
    getAll(): Promise<Book[]>; // Use IBook em vez de Book
    getById(id: string): Promise<Book | null>; // Retorna null se não encontrar
    update(id: string, book: Book): Promise<void>; // Use IBook em vez de Book
    delete(id: string): Promise<void>; // Altera para aceitar apenas o ID
}