import { Route, Switch } from "react-router";

// Styles
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";

// Components
import SideBar from "./components/SideBar";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";
import MemberDetail from "./components/MemberDetail";
import BookDetail from "./components/BookDetail";
import MemberForm from "./components/MemberForm";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Switch>
              <Route path="/members/:memberSlug">
                <MemberDetail />
              </Route>
              <Route path="/books/:bookSlug">
                <BookDetail />
              </Route>
              <Route path="/books">
                <BooksList />
              </Route>
              <Route path="/members">
                <MembersList />
              </Route>
              <Route path="/addmember">
                <MemberForm />
              </Route>
              <Route path="/addbook">
                <BookForm />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
