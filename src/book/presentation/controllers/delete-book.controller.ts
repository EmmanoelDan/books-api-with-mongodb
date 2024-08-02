import { Request, Response } from "express";
import { DeleteBookUsecase } from "../../application/usecases/delete-book.usecase";


export class DeleteBookController {
    constructor(private deleteBookUsecase: DeleteBookUsecase){}
    async handlerDeleteBook(req: Request, res: Response) {

        const id = req.params.id;
        const result = await this.deleteBookUsecase.execute(id);

        if(result.isLeft()) {
            // console.log(result.value.message)
            return res.status(400).json({ statusCode: result.value.statusCode ,message: result.value.message });
        }

        return res.status(200).json({ message: 'Book deleted successfully' });
        
    }
}