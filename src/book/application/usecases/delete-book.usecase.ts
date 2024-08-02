import { IBookRepository } from "../../domain/book.repository";


export class DeleteBookUsecase {
    constructor(private deleteBookRepo: IBookRepository){}
    async execute(id: string): Promise<void> {
        await this.deleteBookRepo.delete(id);
    }
}