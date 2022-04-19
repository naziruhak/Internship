// import PageHome from "./components/PaageHome";
// import PageAbout from "./components/PageAbout";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import AppHeader from "./components/AppHeader";
import Home from "./components/page/Home";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import PagePost from "./components/PagePost";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <PageAbout />
        </Route>
        <Route exaxt path="/PageHome">
          <PageHome />
        </Route>
        <Route exaxt path="/PagePost/:postId">
          <PagePost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
