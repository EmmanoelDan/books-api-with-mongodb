import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    genre: { type: String, required: true }
    }, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

const BookModel = mongoose.model<IBook>('Book', bookSchema);

export default BookModel;