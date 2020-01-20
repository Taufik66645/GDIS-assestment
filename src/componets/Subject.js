import React, { Component } from "react";
import { Card, Segment } from "semantic-ui-react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { Link } from "react-router-dom";

export class subject extends Component {
  SubjectCard = () => (
    <Card.Group>
      <Link to="movieList">
        <Card href>
          <Card.Content>
            <Card.Header>Movies</Card.Header>

            <Card.Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              sed sit vel magni aliquid pariatur aut, accusantium non commodi
              voluptatibus eaque enim fugiat officia quo cum molestias voluptas
              sunt doloribus.
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>

      <Link to="bookList">
        <Card href>
          <Card.Content>
            <Card.Header>Books</Card.Header>

            <Card.Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              sed sit vel magni aliquid pariatur aut, accusantium non commodi
              voluptatibus eaque enim fugiat officia quo cum molestias voluptas
              sunt doloribus.
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>

      <Link to="articleList">
        <Card href>
          <Card.Content>
            <Card.Header>Articles</Card.Header>

            <Card.Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              sed sit vel magni aliquid pariatur aut, accusantium non commodi
              voluptatibus eaque enim fugiat officia quo cum molestias voluptas
              sunt doloribus.
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </Card.Group>
  );

  render() {
    return (
      <div>
        <Segment>
          <this.SubjectCard />
          <MDBContainer></MDBContainer>
        </Segment>
      </div>
    );
  }
}

export default subject;
