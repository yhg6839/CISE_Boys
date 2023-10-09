import React, { useState } from 'react';
import axios from 'axios';
import { Book, ApiResponse } from '../../utils/types';

const BookSearch: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [message, setMessage] = useState<string>('');

  const searchBooks = async () => {
    try {
      // 注意这里的URL更新为'/api/search'
      const response = await axios.get<ApiResponse>('/api/search', {
        params: { title, author }
      });

      if (response.data.message) {
        setMessage(response.data.message);
        setBooks([]);
      } else if (response.data.books) {
        setBooks(response.data.books);
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Name of book" />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
      <button onClick={searchBooks}>Search</button>

      {message && <p>{message}</p>}
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
