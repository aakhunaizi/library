import { Link } from "react-router-dom";
import { StyledForm } from "../styles";
const MemberForm = () => {
  return (
    <>
      <StyledForm>
        <h1>Add Member</h1>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name..."
            className="form-control"
            //   value={product.name}
            //   onChange={handleChange}
          />
          <div className="form-group">
            <label>Last Name </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name..."
              className="form-control"
              // value={product.price}
              // onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label for="inputState">Membership Type</label>
          <select id="inputState" name="membership" className="form-control">
            <option selected>Memberships...</option>
            <option>Platinum</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter member profile image url..."
            className="form-control"
            //   value={product.image}
            //   onChange={handleChange}
          />
        </div>
        <a className="btn btn-outline-success m-2">Add</a>
        <Link to="/members">
          <a className="btn btn-outline-primary">Back</a>
        </Link>
      </StyledForm>
    </>
  );
};

export default MemberForm;
