import { Request, Response } from "express";
import { DeleteBookUsecase } from "../../application/usecases/delete-book.usecase";


export class DeleteBookController {
    constructor(private deleteBookUsecase: DeleteBookUsecase){}
    async handlerDeleteBook(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await this.deleteBookUsecase.execute(id);
        res.status(200).json({ message: 'Book deleted successfully' });
    }
}