import { Link } from "react-router-dom";

const BookTag = ({ book }) => {
  let status = "";
  book.available ? (status = "Available") : (status = "Borrowed");

  return (
    <div className="col-sm-6 mb-4">
      <div className="card h-100">
        <Link to={`/books/${book.slug}`}>
          <img
            className="card-img-top"
            src={book.image}
            alt={book.title}
            style={{ height: "20em" }}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {book.title}
          </h5>
          <p className="card-text">{book.genre.join(", ")}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{status}</li>
        </ul>
        <div className="card-body">
          <Link to={`/books/${book.slug}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookTag;
