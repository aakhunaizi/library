import { useSelector } from "react-redux";
import { useParams, Redirect, Link } from "react-router-dom";

const BookDetail = () => {
  const books = useSelector((state) => state.books);
  const bookSlug = useParams().bookSlug;

  const book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return <h1>This is a page without a Shrek book</h1>;
};

export default BookDetail;
