import React, { Component } from "react";
import NavMenu from "./navMenu";
import axios from "axios";

import { Card } from "semantic-ui-react";
import { response } from "express";

export class movieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=GEVgiEzMU0JO9ogWT15SbJKBoPGfiGDg
    `
      )
      .then(response => {
        this.setState({ movies: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavMenu />
        {this.state.movies.map(movie => {
          return <div>{movie.data}</div>;
        })}
      </div>
    );
  }
}
export default movieList;
