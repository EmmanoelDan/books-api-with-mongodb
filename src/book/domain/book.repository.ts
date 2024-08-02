import { ValidationError } from "../../shared/errors";
import { Either } from "../../shared/helpers/Either";
import { Book } from "./book.entity";

export interface IBookRepository {
    insert(book: Book): Promise<Either<ValidationError, void>>; // Use IBook em vez de Book
    getAll(): Promise<Either<ValidationError,Book[]>>; // Use IBook em vez de Book
    getById(id: string): Promise<Either<ValidationError, Book | null>>; // Retorna null se não encontrar
    update(id: string, book: Book): Promise<Either<ValidationError, void>>; // Use IBook em vez de Book
    delete(id: string): Promise<Either<ValidationError, void>>; // Altera para aceitar apenas o ID
}