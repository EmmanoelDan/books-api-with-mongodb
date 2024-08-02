import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

export class CreateBookUsecase {
    constructor(private _createBookRepo: IBookRepository){
    }
    async execute(bookProps: Book): Promise<void> {
        const book = new Book(bookProps);
        await this._createBookRepo.insert(book);
    }
}