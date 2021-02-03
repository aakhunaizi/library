import { useSelector } from "react-redux";
import BookTag from "./BookTag";
// Components
import NavBar from "./NavBar";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  const booksList = books.map((book) => <BookTag book={book} key={book.id} />);

  return (
    <>
      <NavBar formButton={"Add Book"} form={"books"} />
      <div class="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">My Books</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {booksList}
          {/* <Tag name={"Hellooo"}/> */}
        </div>
      </div>
    </>
  );
};

export default BooksList;
