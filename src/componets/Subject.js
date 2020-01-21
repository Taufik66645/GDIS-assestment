import React, { Component } from "react";
import { Card, Segment, Form } from "semantic-ui-react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody
} from "mdbreact";
import { Link } from "react-router-dom";

export class subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: [],
      modal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  SubjectCard = () => (
    <Card.Group
      style={{
        justifyContent: "space-evenly"
      }}
    >
      <Link to="movieList">
        <Card>
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
        <Card>
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
        <Card>
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

  handleChange(event) {
    this.setState({ subject: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MDBContainer
          style={{
            padding: "5px",
            textAlign: "center"
          }}
        >
          <Segment
            style={{
              padding: "5%"
            }}
          >
            <this.SubjectCard />
          </Segment>
          <MDBBtn onClick={this.toggle}>Add New Subject</MDBBtn>
        </MDBContainer>
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Add New Subject
            </MDBModalHeader>
            <MDBModalBody>
              <Form>
                <Form.Field onChange={this.handleChange}>
                  <label>Subject Name</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label onChange={this.handleChange}>
                    Description
                  </label>
                  <input />
                </Form.Field>
              </Form>
            </MDBModalBody>

            <MDBBtn color="primary" onClick={this.handleSubmit}>
              Submit
            </MDBBtn>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default subject;
