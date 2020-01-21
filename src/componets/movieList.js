import React, { Component } from "react";
import NavMenu from "./navMenu";
import axios from "axios";
import { Card, Image, CardGroup } from "semantic-ui-react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { logDOM } from "@testing-library/react";

export class movieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      modal: false
      // modalContent: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=GEVgiEzMU0JO9ogWT15SbJKBoPGfiGDg
    `
      )
      .then(response => {
        this.setState({ movies: response.data.results });
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle = movies => {
    console.log (movies)
    this.setState({
      modal: !this.state.modal
      // modalContent: movies
    });
  };

  render() {
    return (
      <div>
        <NavMenu />
        <h1>Movie List</h1>
        {this.state.movies &&
          this.state.movies.map((movies, index) => {
            return (
              <Card.Group>
                <Card key={movies.index} href onClick={this.toggle}>
                  {movies.display_title} <br /> Rating = {movies.mpaa_rating}
                </Card>
              </Card.Group>
            );
          })}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>MOVIE DETAIL</MDBModalHeader>
            <MDBModalBody>Movie = {this.statemovies}</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
export default movieList;
