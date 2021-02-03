const MemberTag = ({ member }) => {
  return (
    <div className="col-sm-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg"
          alt="Shrek"
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {member.firstName} {member.lastName}
          </h5>
          {/* <p className="card-text">{book.genre.join(", ")}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{member.membership.toUpperCase()}</li>
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

export default MemberTag;
