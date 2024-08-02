import { Book } from "../../domain/book.entity";
import { IBookRepository } from "../../domain/book.repository";
import BookModel from "../../domain/book.schema";

export class MongoBookRepository implements IBookRepository {
    async insert(book: Book): Promise<void> {
        const bookData = new BookModel(book);
        await bookData.save();
    }
    async getAll(): Promise<Book[]> {
        const books = await BookModel.find().exec();
        return books.map(book => new Book({
            _id: book._id as string ,
            title: book.title,
            author: book.author,
            publicationYear: book.publicationYear,
            genre: book.genre,
        }));
    }
    async getById(id: string): Promise<Book | null> {
        const bookData = await BookModel.findById(id);
        if (!bookData) return null;

        return new Book({
            _id: bookData._id as string ,
            title: bookData.title,
            author: bookData.author,
            publicationYear: bookData.publicationYear,
            genre: bookData.genre,
        });
    }
    async update(id: string, book: Book): Promise<void> {
        await BookModel.updateOne({_id: id}, book);
    }
    async delete(id: string): Promise<void> {
        await BookModel.deleteOne({_id: id});
    }
   
    
}