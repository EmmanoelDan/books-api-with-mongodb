import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";


export class UpdateBookUsecase {
    constructor(private _updateBookRepo: IBookRepository){
    }

    async execute(id: string, book: Book): Promise<void> {
        await this._updateBookRepo.update(id, book);
    }
}