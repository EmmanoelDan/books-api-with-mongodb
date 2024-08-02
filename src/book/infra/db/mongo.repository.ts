import { ValidationError } from "../../../shared/errors";
import { Either, left, right } from "../../../shared/helpers/Either";
import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";
import BookModel from "../../domain/book.schema";

export class MongoBookRepository implements IBookRepository {
    async insert(book: Book): Promise<Either<ValidationError, void>> {
        try {
            const bookData = new BookModel(book);
            await bookData.save();
            return right(undefined);
        } catch (error) {
            return left(new ValidationError("Error inserting book"));
        }
        
    }
    async getAll(): Promise<Either<ValidationError,Book[]>> {
        try {
            const newBook = await BookModel.find().exec();
            const book = newBook.map(book => new Book({
                _id: book._id as string ,
                title: book.title,
                author: book.author,
                publicationYear: book.publicationYear,
                genre: book.genre,
            }));

            return right(book);
        } catch (error) {
            return left(new ValidationError("Error Get All Books"));
        }
        

    }
    async getById(id: string): Promise<Either<ValidationError,Book | null>> {
        try {
            const bookData = await BookModel.findById(id);
            if (!bookData) {
                return left(new ValidationError("Book already exists"));
            };
            const newBook = new Book({
                _id: bookData._id as string ,
                title: bookData.title,
                author: bookData.author,
                publicationYear: bookData.publicationYear,
                genre: bookData.genre,
            });

            return right(newBook);
        } catch (error) {
            return left(new ValidationError("Error get book by id"));
        }
        
    }
    async update(id: string, book: Book): Promise<Either<ValidationError, void>> {
        try {
            await BookModel.updateOne({_id: id}, book);
            return right(undefined);
        } catch (error) {
            return left(new ValidationError("Error update book"));
        }
        
    }
    async delete(id: string): Promise<Either<ValidationError, void>> {
        try {
            await BookModel.deleteOne({_id: id});
            return right(undefined);
        } catch (error) {
            return left(new ValidationError("Error inserting book"));
        }
    }
   
    
}