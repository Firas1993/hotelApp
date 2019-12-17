import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Navbar from "./component/Navbar"
function App() {
  return (
     <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to={`/room/:roomId`}>Room 12</Link>
          </li>
        </ul>

      <Navbar />
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/room/:roomId">
            <Room />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route  Component={Error} />
        </div>
      </div>
    </Router>
  );
};

export default App;
