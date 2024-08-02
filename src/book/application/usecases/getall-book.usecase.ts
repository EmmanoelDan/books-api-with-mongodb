import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

export class GetAllBookUsecase {
    constructor(private _getAllBook: IBookRepository){
    }
    async execute(): Promise<Book[]> {
        const books = await this._getAllBook.getAll();
        return books
    }
}