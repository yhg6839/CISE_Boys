// models/Book.ts
import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  publishedDate?: Date;
  isbn?: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: Date,
  isbn: String
});

// Check if the model is already defined in Mongoose
const BookModel: Model<IBook> = mongoose.models.Book || mongoose.model<IBook>('Book', BookSchema);

export default BookModel;
