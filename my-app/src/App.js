import React from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Library from "./Library"
import MyTBR from "./MyTBR"
import MyRead from "./MyRead"
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Book Trackr</h1>
        <NavBar />
      </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/mytbr">
            <MyTBR />
          </Route>
          <Route path="/myread">
            <MyRead />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
