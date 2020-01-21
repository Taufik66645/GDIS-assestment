import React, { Component } from "react";
import NavMenu from "./navMenu";
import axios from "axios";
import { Card } from "semantic-ui-react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export class movieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      modal: false,
      modalContent: {}
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
    console.log(movies);
    this.setState({
      modal: !this.state.modal,
      modalContent: Object.assign({}, movies)
    });
  };

  render() {
    return (
      <div>
        <NavMenu />
        <h1 style={{
          textAlign:'center'
        }}>Movie List</h1>
        {this.state.movies &&
          this.state.movies.map((movies, index) => {
            return (
              <Card.Group
                key={index}
                style={{
                  display: "inline-block",
                  margin:'5px'
                }}
              >
                <Card
                  key={movies.index}
                  onClick={() => this.toggle(movies)}
                  style={{
                    padding: "5%",
                    justifyContent: "space-evenly"
                  }}
                >
                  {movies.display_title}
                </Card>
              </Card.Group>
            );
          })}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>MOVIE DETAIL</MDBModalHeader>
            <MDBModalBody>
              Movie = {this.state.modalContent.display_title}
              <br />
              Author ={this.state.modalContent.byline}
              <br />
              Rating ={this.state.modalContent.mpaa_rating}
              <br />
              Headline ={this.state.modalContent.headline}
              <br />
              Summary ={this.state.modalContent.summary_short}
              <br />
              Opening Date ={this.state.modalContent.opening_date}
              <br />
              Publication Date ={this.state.modalContent.publication_date}
            </MDBModalBody>
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
