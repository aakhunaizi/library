import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { returnBook } from "../store/actions";

const BorrowedBook = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-3 py-10 border-bottom-dark">
      <div className="card-body">
        <Link to={`/books/${book.slug}`} style={{ textDecoration: "none" }}>
          {book.title}
        </Link>
        <div style={{ float: "right" }}>
          <button
            // onClick={dispatch(returnBook(book))}
            className="fas btn btn-outline-danger"
            style={{ fontSize: "12px" }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBook;
