import express from 'express';
import mongoose from 'mongoose';
import bookRouter from './book/presentation/routes/book.routes';

export class Api {
    public static async run(
        port: number
    ): Promise<void> {
        const app = express();
        const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        mongoose.connect(MONGO_URI).then(() => {
            console.log('Connected to MongoDB');
            app.use("/book-api/v1", bookRouter)

            app.listen(port, () => {
              console.log(`Server running on port ${port}`);
            });
          }).catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            console.error(err);
          });
    }
}