import { useSelector } from "react-redux";
import Tag from "./Tag";

const BooksList = () => {
  const books = useSelector((state) => state.books);

    const booksList = books.map((book) => 
        <Tag book={book} key={book.id} />
    );

  return (
    <div class="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">My Books</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {booksList}
        {/* <Tag name={"Hellooo"}/> */}
      </div>
    </div>
  );
};

export default BooksList;
