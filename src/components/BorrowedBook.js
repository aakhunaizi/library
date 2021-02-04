import { Link } from "react-router-dom";

const BorrowedBook = ({book}) => {
    return (
        <div className="card mb-3 py-10 border-bottom-dark">
            <Link to={`/books/${book.slug}`} style={{textDecoration: "none"}}>
                <div className="card-body">
                    {book.title}
                    <div style={{float: "right"}}>
                        <Link to={`/books/${book.slug}`}>
                            <button className="fas btn btn-outline-danger" style={{fontSize:"12px"}}>Return</button>          
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BorrowedBook; 