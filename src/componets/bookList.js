import React, { Component } from "react";
import axios from "axios";
import NavMenu from "./navMenu";

import { Card } from "semantic-ui-react";

export class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
  render() {
    return (
      <div>
        <NavMenu />
        <h1>Book List</h1>
        {this.state.books &&
          this.state.books.map((books, index) => {
            return (
              <Card.Group>
                <Card key={books.index} href>
                  {books.title}
                </Card>
              </Card.Group>
            );
          })}
      </div>
    );
  }
}

export default bookList;
