const BookTag = ({ book }) => {
  let status = "";
  book.available ? (status = "Available") : (status = "Borrowed");

  return (
    <div className="col-sm-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={book.image} alt={book.title} />
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
          <a href="#" className="btn btn-primary">
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookTag;
