import { Link } from "react-router-dom";
import { StyledForm } from "../styles";
const BookForm = () => {
  return (
    <>
      <StyledForm>
        <h1>Add Book</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="bookTitle"
            placeholder="Enter book title..."
            className="form-control"
            //   value={product.name}
            //   onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter book author..."
            className="form-control"
            // value={product.price}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Enter book genre..."
            className="form-control"
            // value={product.price}
            // onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter book image url..."
            className="form-control"
            //   value={product.image}
            //   onChange={handleChange}
          />
        </div>
        <a className="btn btn-outline-success m-2">Add</a>
        <Link to="/books">
          <a className="btn btn-outline-primary">Back</a>
        </Link>
      </StyledForm>
    </>
  );
};

export default BookForm;
