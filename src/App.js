import { Route, Switch } from "react-router";
import { useState } from "react";

// Styles
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";

// Components
import SideBar from "./components/SideBar";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";


function App() {

  return (
    <div>
      <div id="wrapper"> 
        <SideBar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Switch>
              <Route path="/books">
                <BooksList />
              </Route>
              <Route path="/members">
                <MembersList/>
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
