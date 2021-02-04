import { MdRemoveCircle } from "react-icons/md";

const BorrowedBook = ({book}) => {
    return (
        <div className="card mb-3 py-10 border-bottom-dark">
            <div className="card-body">
                {book.title}
                <div style={{float: "right"}}>
                    <button className="fas btn btn-outline-danger" style={{fontSize:"12px"}}><MdRemoveCircle/>Return</button>          
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook; 