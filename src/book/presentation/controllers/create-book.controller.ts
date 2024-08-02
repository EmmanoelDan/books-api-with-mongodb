import { Request, Response } from "express";
import { CreateBookUsecase } from "../../application/usecases/create-book.usecase";
import { Book } from "../../domain/book.entity";

export class CreateBookController {
    constructor(private createBookUsecase: CreateBookUsecase){}

    async handlerCreateBook(req: Request, res: Response){
        const bookProps: Book = req.body;
        await this.createBookUsecase.execute(bookProps)

        res.status(201).json({message:  "Book created successfully"});
    }
}