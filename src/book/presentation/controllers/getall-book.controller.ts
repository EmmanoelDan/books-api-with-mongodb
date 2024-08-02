import { Request, Response } from "express";
import { GetAllBookUsecase } from "../../application/usecases/getall-book.usecase";

export class GetAllBookController {
    constructor(private getAllBook: GetAllBookUsecase){}

    async handlerGetAllBook(req: Request, res: Response){
        const result = await this.getAllBook.execute()
        // console.log(result)
        res.status(201).json({data: result});
    }
}