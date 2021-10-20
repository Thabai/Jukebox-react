import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import HomePage from "./Pages/Homepage";
import Albums from "./Pages/AlbumsAvailable";
import DefaultPlaylist from "./Pages/DefaultPlaylist";
import Playlist from "./Pages/Playlist";

const App = () => {

  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Albums">
            <Albums />
          </Route>
          <Route exact path="/defaultPlaylist">
            <DefaultPlaylist/>
          </Route>
          <Route exact path="/createPlaylist">
            <Playlist />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
