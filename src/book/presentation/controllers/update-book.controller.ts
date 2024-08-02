import { Request, Response } from "express";
import { UpdateBookUsecase } from "../../application/usecases/update-book.usecase";
import { Book } from "../../domain/book.entity";

export class UpdateBookController {
    constructor(private updateBookUsecase: UpdateBookUsecase){}

    async updateBookController(req: Request, res: Response){
        const { id } = req.params;
        const book: Book = req.body;
        const result = await this.updateBookUsecase.execute(id, book);

        if (result.isLeft()) {
            return res.status(400).json({ message: result.value });
        }
        res.status(200).json({message:  "Book update successfully"});
    }
}