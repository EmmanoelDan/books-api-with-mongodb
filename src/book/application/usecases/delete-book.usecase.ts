import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { IBookRepository } from "../../domain/book.repository";

type DeleteBookUseCaseResponse = Either<ValidationError, {}>;

export class DeleteBookUsecase {
    constructor(private deleteBookRepo: IBookRepository){}
    async execute(id: string): Promise<DeleteBookUseCaseResponse> {
        const alreadyExistsBook = await this.deleteBookRepo.getById(id);

        if(alreadyExistsBook.isLeft()) {
            return left(new ValidationError("Error get book by id!"));
        }
        const deletedBook = await this.deleteBookRepo.delete(id);

        if(deletedBook.isLeft()) {
            return left(new ValidationError("Error deleting book"));
        }

        return right({})
    }
}