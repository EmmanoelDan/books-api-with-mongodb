import { Request, Response } from "express";
import { GetAllBookUsecase } from "../../application/usecases/getall-book.usecase";

export class GetAllBookController {
    constructor(private getAllBook: GetAllBookUsecase){}

    async handlerGetAllBook(req: Request, res: Response){
        const result = await this.getAllBook.execute()

        if(result.isLeft()) {
            return res.status(404).json({ message: result.value.message });
        }
        // console.log(result)
        res.status(200).json(result.value);
    }
}