import React from 'react';

import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";


function App() {
  return (
    <div className="">
     Hello From APP
     <hr />
     <Home />
     <Rooms />
     <Room />
     <Error />

    </div>
  );
}

export default App;
