import { Request, Response } from "express";
import { UpdateBookUsecase } from "../../application/usecases/update-book.usecase";
import { Book } from "../../domain/book.entity";

export class UpdateBookController {
    constructor(private updateBookUsecase: UpdateBookUsecase){}

    async updateBookController(req: Request, res: Response){
        const { id } = req.params;
        const book: Book = req.body;
        await this.updateBookUsecase.execute(id, book);

        res.status(201).json({message:  "Book update successfully"});
    }
}