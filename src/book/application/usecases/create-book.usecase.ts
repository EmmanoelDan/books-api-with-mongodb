import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";

interface ICreateBookRequest {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

type CreateBookUseCaseResponse = Either<ValidationError, {}>;

export class CreateBookUsecase {
    constructor(private _createBookRepo: IBookRepository){
    }
    async execute(bookProps: ICreateBookRequest): Promise<CreateBookUseCaseResponse> {
        if(!bookProps.genre) {
            return left(new ValidationError("Genre is required!"));
        }

        if(!bookProps.title) {
            return left(new ValidationError("Title is required!"));
        }
        
        if(!bookProps.author) {
            return left(new ValidationError("Author is required!"));
        }
        
        if(!bookProps.publicationYear) {
            return left(new ValidationError("publication year is required!"));
        }
        
        const book = new Book(bookProps);
        const insertResult = await this._createBookRepo.insert(book);
        
        if(insertResult.isLeft()) {
            return left(new ValidationError("Could not insert the book"));
        }
        return right(book)
    }
}