import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook} from "../store/actions";

import { StyledForm } from "../styles";

const BookForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [book, setBook] = useState({
        author: "",
        title: "",
        genre: "",
        image: "",
    }
  );

  const handleChange = (event) => setBook({...book, [event.target.name]: event.target.value});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    history.push("/books");
  };
  
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Add Book</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title..."
            className="form-control"
              value={book.title}
              onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter book author..."
            className="form-control"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Enter book genre..."
            className="form-control"
            value={book.genre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter book image url..."
            className="form-control"
              value={book.image}
              onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success m-2">Add</button>
        <Link to="/books">
          <button className="btn btn-outline-primary">Back</button>
        </Link>
      </StyledForm>
    </>
  );
};

export default BookForm;
