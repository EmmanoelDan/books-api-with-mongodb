import { Request, Response } from "express";
import { GetByIdBookUsecase } from "../../application/usecases/getbyid-book.usecase";

export class GetByIdBookController {
    constructor(private getByIdUsecase: GetByIdBookUsecase){}

    async handlerGetByIdBook(req: Request, res: Response){
        const id = req.params.id
        const result = await this.getByIdUsecase.execute(id)
        // console.log(result)
        res.status(201).json({data: result});
    }
}