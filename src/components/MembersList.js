import { useSelector } from "react-redux";
import MemberTag from "./MemberTag";
// Components
import NavBar from "./NavBar";


const MembersList = () => {
  const members = useSelector((state) => state.members);

  const membersList = members.map((member) => (
    <MemberTag member={member} key={member.id} />
  ));

  return (
    <>
      <NavBar formButton={"Add Member"}/>
      <div class="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Members</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {membersList}
        </div>
      </div>
    </>
  );
};

export default MembersList;
