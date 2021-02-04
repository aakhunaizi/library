import { useSelector } from "react-redux";
import { useParams, Redirect} from "react-router-dom";
import { FaAward } from "react-icons/fa";
import { GiSecretBook, GiEvilBook } from "react-icons/gi";
import { IoWarning } from "react-icons/io5";

// Components
import BorrowedBook from "./BorrowedBook";

const MemberDetail = () => {
  const members = useSelector((state) => state.members);
  const books = useSelector((state) => state.books);
  const memberSlug = useParams().memberSlug;

  const member = members.find((member) => member.slug === memberSlug);
  let fullName = [member["firstName"], member["lastName"]];
  fullName = fullName.join(" ");
  const membership =
    member.membership[0].toUpperCase() + member.membership.substring(1);

  let allowance = 0;
  if (member.membership === "platinum") {
    allowance = 5 - member.currentlyBorrowedBooks.length;
  } else if (member.membership === "gold") {
    allowance = 3 - member.currentlyBorrowedBooks.length;
  } else {
    allowance = 2 - member.currentlyBorrowedBooks.length;
  }

  const borrowedBooks = books.filter((book) =>
    member.currentlyBorrowedBooks.includes(book.id)
  );
  const borrowedList = borrowedBooks.map((book) => (
    <BorrowedBook book={book} />
  ));

  if (!member) return <Redirect to="/members" />;

  return (
    <>
      <div className="container-fluid">
        <div
          className="d-sm-flex align-items-center justify-content-between mb-4"
          style={{ marginTop: "2%" }}
        >
          <h1 className="h3 mb-0 text-gray-800" style={{ fontWeight: "bold" }}>
            {fullName}
          </h1>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Membership Type
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {membership}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-2x text-gray-300">
                      <FaAward />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Borrowed Books
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {member.currentlyBorrowedBooks.length}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-2x text-gray-300">
                      <GiSecretBook />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Remained Allowance
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {allowance}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-2x text-gray-300">
                      <GiEvilBook />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {member.requestedBooks.length}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-2x text-gray-300">
                      <IoWarning />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Lend {member.firstName} a new book
                </h6>
              </div>
              <div className="card-body" style={{ height: "30em" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    marginTop: "5em",
                    height: "17.5em",
                    width: "17.5em",
                    borderRadius: "50%",
                    border: "5px solid #5a5c69",
                  }}
                />
                <button className="btn btn-primary" style={{marginTop:"20px", marginLeft:"80px"}}>Lend Book</button>
                <div className="mt-4 text-center small">
                  <span className="mr-2">
                    <i></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Borrowed Books
                </h6>
              </div>
              <div className="card-body" style={{ height: "30em" }}>
                <div className="chart-area">{borrowedList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetail;
