import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { IBookRepository } from "../../domain/book.repository";

type GetAllBookUseCaseResponse = Either<ValidationError, {}>;

export class GetAllBookUsecase {
    constructor(private _getAllBook: IBookRepository){
    }
    async execute(): Promise<GetAllBookUseCaseResponse> {
        const books = await this._getAllBook.getAll();

        if(books.isLeft()) {
            return left(new ValidationError("The books does not exist"));
        }
        return right({data: books})
    }
}