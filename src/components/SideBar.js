import { Link } from "react-router-dom";

// Icons
import { FaBook } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const SideBar = () => {
  
  return (
    <ul
      className=" navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Library</div>
        {/* <sup>2</sup> */}
      </a>

      <hr className="sidebar-divider my-0"></hr>

      {/* <div className="sidebar-heading">Interface</div> */}
      <Link to="/books">
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              >
              <i>
                <FaBook />
              </i>
              <span style={{ marginLeft: "10px" }}>Books</span>
            </a>
          </li>
      </Link>

      <hr class="sidebar-divider my-0"></hr>

      <Link to="/members">
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            >
            <i>
              <BsFillPersonFill size={18} />
            </i>
            <span style={{ marginLeft: "7px" }}>Members</span>
          </a>
        </li>
      </Link>

      <hr class="sidebar-divider my-0"></hr>

      {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}
    </ul>
  );
};

export default SideBar;
