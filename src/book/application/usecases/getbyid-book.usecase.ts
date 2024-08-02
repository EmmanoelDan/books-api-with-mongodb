import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

export class GetByIdBookUsecase {
    constructor(private _getByIdBook: IBookRepository){
    }
    async execute(id: string): Promise<Book | null> {
        const book = await this._getByIdBook.getById(id);
        return book
    }
}