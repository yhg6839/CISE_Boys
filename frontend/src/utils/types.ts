export interface Book {
  _id: string;
  title: string;
  author: string;
}

export interface ApiResponse {
  books?: Book[];
  message?: string;
}