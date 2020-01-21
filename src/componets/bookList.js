import React, { Component } from "react";
import axios from "axios";
import NavMenu from "./navMenu";

import { Card } from "semantic-ui-react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modal: false,
      modalContent: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GEVgiEzMU0JO9ogWT15SbJKBoPGfiGDg
        `
      )
      .then(response => {
        this.setState({ books: response.data.results.books });
        console.log(response.data.results.books);
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle = books => {
    console.log(books);
    this.setState({
      modal: !this.state.modal,
      modalContent: Object.assign({}, books)
    });
  };

  render() {
    return (
      <div>
        <NavMenu />
        <h1>Book List</h1>
        {this.state.books &&
          this.state.books.map((books, index) => {
            return (
              <Card.Group key={index}>
                <Card key={books.index} onClick={() => this.toggle(books)}>
                  {books.title}
                </Card>
              </Card.Group>
            );
          })}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>BOOK DETAIL</MDBModalHeader>
            <MDBModalBody>
              Movie = {this.state.modalContent.title}
              <br />
              Author ={this.state.modalContent.author}
              <br />
              Publisher ={this.state.modalContent.publisher}
              <br />
              Description ={this.state.modalContent.description}
              <br />
              Contributor ={this.state.modalContent.contributor}
              <br />
              Price ={this.state.modalContent.price}
              <br />
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

export default bookList;
