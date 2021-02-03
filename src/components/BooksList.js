import { useSelector } from "react-redux";
import Tag from "./Tag";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  //   const booksList = books.map((book) => {
  //     <div className="row">
  //       <Tag book={book} key={book.id} />
  //     </div>;
  //   });

  return (
    <div class="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">My Books List</h1>
      </div>
      <div>
        <Tag />
      </div>
    </div>
  );
};

export default BooksList;
