import { Link } from "react-router-dom";

const BookHistory = ({member}) => {
    let fullName = [member["firstName"], member["lastName"]];
    fullName = fullName.join(" ");

    return (
        <div className="card mb-3 py-10 border-bottom-dark">
            <Link to={`/members/${member.slug}`} style={{textDecoration: "none"}}>
                <div className="card-body">
                    {fullName}
                    <div style={{float: "right"}}>
                        <Link to={`/members/${member.slug}`}>
                            <button className="fas btn btn-outline-primary" style={{fontSize:"12px"}}>View Profile</button>          
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookHistory; 