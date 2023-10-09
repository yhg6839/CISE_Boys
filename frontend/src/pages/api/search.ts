import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/connectDb';
import { Book, IBook } from '../../models/Book';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { title, author } = req.query;

  try {
    // 使用正则表达式来进行模糊匹配
    const books: IBook[] = await Book.find({
      title: new RegExp(String(title), 'i'),
      author: new RegExp(String(author), 'i'),
    });

    if (!books.length) {
      return res.status(200).json({ message: 'No books found' });
    }
    
    return res.status(200).json({ books });
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching books' });
  }
}