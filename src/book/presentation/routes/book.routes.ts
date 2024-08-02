import express from 'express';
import { MongoBookRepository } from '../../infra/db/mongo.repository';
import { CreateBookUsecase } from '../../application/usecases/create-book.usecase';
import { CreateBookController } from '../controllers/create-book.controller';
import { GetAllBookUsecase } from '../../application/usecases/getall-book.usecase';
import { GetAllBookController } from '../controllers/getall-book.controller';
import { GetByIdBookUsecase } from '../../application/usecases/getbyid-book.usecase';
import { GetByIdBookController } from '../controllers/getbyid-book.controller';
import { UpdateBookUsecase } from '../../application/usecases/update-book.usecase';
import { UpdateBookController } from '../controllers/update-book.controller';
import { DeleteBookUsecase } from '../../application/usecases/delete-book.usecase';
import { DeleteBookController } from '../controllers/delete-book.controller';

const bookRouter = express.Router();

const bookMongoRepository = new MongoBookRepository();

const createBookUsecase = new CreateBookUsecase(bookMongoRepository);
const createBookController = new CreateBookController(createBookUsecase);

const getAllBooksUsecase = new GetAllBookUsecase(bookMongoRepository)
const getAllBooksController = new GetAllBookController(getAllBooksUsecase);

const getByIdBookUsecase = new GetByIdBookUsecase(bookMongoRepository);
const getByIdBookController = new GetByIdBookController(getByIdBookUsecase)

const updateBookUsecase = new UpdateBookUsecase(bookMongoRepository);
const updateBookController = new UpdateBookController(updateBookUsecase)

const deleteBookUsecase = new DeleteBookUsecase(bookMongoRepository)
const deleteBookController = new DeleteBookController(deleteBookUsecase)

bookRouter.get('/', (req, res) => {
    res.send("API V1 Testing")
})
bookRouter.post('/books', (req, res) => createBookController.handlerCreateBook(req, res));
bookRouter.get('/books', (req, res) => getAllBooksController.handlerGetAllBook(req, res));
bookRouter.get('/books/:id',  (req, res) => getByIdBookController.handlerGetByIdBook(req, res))
bookRouter.put('/books/:id', (req, res) => updateBookController.updateBookController(req, res));
bookRouter.delete('/books/:id', (req, res) => deleteBookController.handlerDeleteBook(req, res));

export default bookRouter;