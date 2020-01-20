import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NavMenu from "./componets/navMenu";
import Subject from "./componets/Subject";
import MovieList from "./componets/movieList";
import BookList from "./componets/bookList";
import ArticleList from "./componets/articleList";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <NavMenu />
          <Subject />
        </Route>
        <Route exact path="/movielist">
          <MovieList/>
        </Route>
        <Route exact path="/bookList">
          <BookList/>
        </Route>
        <Route exact path="/articleList">
          <ArticleList/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
