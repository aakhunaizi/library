import { Link } from "react-router-dom";
const MemberTag = ({ member }) => {
  return (
    <div className="col-sm-6 mb-4">
      <div className="card h-100">
        <Link to={`/members/${member.slug}`}>
          <img
            className="card-img-top"
            src={member.image}
            alt={member.name}
            style={{ height: "15em" }}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {member.firstName} {member.lastName}
          </h5>
          {/* <p className="card-text">{book.genre.join(", ")}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {member.membership.toUpperCase()} MEMBER
          </li>
        </ul>
        <div className="card-body">
          <Link to={`/members/${member.slug}`}>
            <button className="btn btn-primary">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberTag;
