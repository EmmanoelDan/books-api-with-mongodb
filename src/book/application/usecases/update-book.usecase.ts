import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

interface IUpdatedBookRequest {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

type UpdateBookUseCaseResponse = Either<ValidationError, {}>;

export class UpdateBookUsecase {
    constructor(private _updateBookRepo: IBookRepository){
    }

    async execute(id: string, book: Book): Promise<UpdateBookUseCaseResponse> {
        const updateBook = await this._updateBookRepo.update(id, book);
        if(updateBook.isLeft()) {
            return left(new ValidationError("The book does not exist"));
        }
        
        if(!book.genre) {
            return left(new ValidationError("Genre is required!"));
        }

        if(!book.title) {
            return left(new ValidationError("Title is required!"));
        }
        
        if(!book.author) {
            return left(new ValidationError("Author is required!"));
        }
        
        if(!book.publicationYear) {
            return left(new ValidationError("publication year is required!"));
        }

        return right(updateBook)
    }
}