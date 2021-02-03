import { useSelector } from "react-redux";
import { useParams, Redirect, Link } from "react-router-dom";

const MemberDetail = () => {
  const members = useSelector((state) => state.members);
  const memberSlug = useParams().memberSlug;

  const member = members.find((member) => member.slug === memberSlug);
  if (!member) return <Redirect to="/members" />;
  return <h1>This is a page without Shrek</h1>;
};

export default MemberDetail;
