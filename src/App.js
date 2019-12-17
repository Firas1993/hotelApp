import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { FaBeer,Fa500Px,FaAccessibleIcon } from 'react-icons/fa';

import "./App.css";

import Navbar from "./component/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";


function App() {
  return (
     <Router>
      <div>
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
