import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../store/actions";

import { StyledForm } from "../styles";

const MemberForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [member, setMember] = useState({
        firstName: "",
        lastName: "",
        membership: "",
        image: "",
    }
  );

  const handleChange = (event) => setMember({...member, [event.target.name]: event.target.value});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(member));
    history.push("/members");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}> 
        <h1>Add Member</h1>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name..."
            className="form-control"
              value={member.firstName}
              onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <label>Last Name </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name..."
              className="form-control"
              value={member.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Membership Type</label>
            <input
              type="text"
              name="membership"
              placeholder="Enter memberships type..."
              className="form-control"
              value={member.membership}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              name="image"
              placeholder="Enter member profile image url..."
              className="form-control"
                value={member.image}
                onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn btn-outline-success m-2">Add</button>
        <Link to="/members">
          <button className="btn btn-outline-primary">Back</button>
        </Link>
      </StyledForm>
    </>
  );
};

export default MemberForm;
