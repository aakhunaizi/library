// Styles
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";

// Components
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import BooksList from "./components/BooksList";


function App() {
  return (
    <div>
      <div id="wrapper"> 
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <BooksList />




          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
