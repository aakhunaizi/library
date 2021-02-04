import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { RiPencilFill } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";

// Components
import BookHistory from "./BookHistory";

const BookDetail = () => {
  const members = useSelector((state) => state.members);
  const books = useSelector((state) => state.books);

  const bookSlug = useParams().bookSlug;
  const book = books.find((book) => book.slug === bookSlug);

  let status = "";
  (book.available)? status = "Available" : status = "Borrowed";

  const membersHistory = members.filter(member => book.borrowedBy.includes(member.id));
  const bookHistory = membersHistory.map(member => 
     <BookHistory member={member}/>
    );

  if (!book) return <Redirect to="/books" />;
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{marginTop : "2%"}}>
            <h1 className="h3 mb-0 text-gray-800" style={{fontWeight : "bold"}}>{book.title}</h1>
        </div>

        <div className="row">

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Author</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{book.author}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-2x text-gray-300"><RiPencilFill/></i>
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
                                  Genre</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{book.genre.join(" ")}</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-2x text-gray-300"><GiSpellBook/></i>
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
                                Status</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{status}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-2x text-gray-300"><AiFillQuestionCircle/></i>
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
                                Pending Requests</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{book.requestedBy.length}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-2x text-gray-300"><IoWarning/></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>

        <div className="row">
            <div className="col-xl-4 col-lg-5" > 
                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Hellooo</h6>
                    </div>
                    <div className="card-body" style={{height: "30em"}}>
                            <img
                                src={book.image}
                                alt={book.title}
                                style={{height: "24em", width:"17.5em"}}
                            />
                        <div className="mt-4 text-center small">
                            <span className="mr-2"><i></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Book History</h6>
                    </div>
                    <div className="card-body" style={{height: "30em"}}>
                        <div className="chart-area">
                          {bookHistory}
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </>
  );
};

export default BookDetail;
