import { Link } from "react-router-dom";

const BookHistory = ({member}) => {
    let fullName = [member["firstName"], member["lastName"]];
    fullName = fullName.join(" ");

    return (
        <div className="card mb-3 py-10 border-bottom-dark">
                <div className="card-body">
                    {fullName}
                    <div style={{float: "right"}}>
                            <button className="fas btn btn-outline-primary" style={{fontSize:"12px"}}>View Profile</button>          
                    </div>
                </div>
        </div>
    );
};

export default BookHistory; 