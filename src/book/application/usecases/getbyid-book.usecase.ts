import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

type GetByIdBookUseCaseResponse = Either<ValidationError, Book | {}>;

export class GetByIdBookUsecase {
    constructor(private _getByIdBook: IBookRepository){
    }
    async execute(id: string): Promise<GetByIdBookUseCaseResponse> {
        const book = await this._getByIdBook.getById(id);

        if(book.isLeft()) {
            return left(new ValidationError("The book does not exist"));
        }
        return right(book)
    }
}