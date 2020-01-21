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

export class articleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      modal: false,
      modalContent: {}
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GEVgiEzMU0JO9ogWT15SbJKBoPGfiGDg
            `
      )
      .then(response => {
        this.setState({ articles: response.data.response.docs });
        console.log(response.data.response.docs);
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle = articles => {
    console.log(articles);
    this.setState({
      modal: !this.state.modal,
      modalContent: Object.assign({}, articles)
    });
  };

  render() {
    return (
      <div>
        <NavMenu />
        <h1 style={{
          textAlign:'center'
        }}>Article List</h1>
        {this.state.articles &&
          this.state.articles.map((articles, index) => {
            return (
              <Card.Group
                key={index}
                style={{
                  display: "inline-block",
                  margin:'5px'
                }}
              >
                <Card
                  key={articles.index}
                  onClick={() => this.toggle(articles)}
                  style={{
                    padding: "5%",
                    justifyContent: "space-evenly"
                  }}
                >
                  <h4>Abstract</h4>
                  <br />
                  {articles.abstract}
                </Card>
              </Card.Group>
            );
          })}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>ARTICLE</MDBModalHeader>
            <MDBModalBody>
              Abstract = {this.state.modalContent.abstract}
              <br />
              Paragraph ={this.state.modalContent.lead_paragraph}
              <br />
              Web Url ={this.state.modalContent.web_url}
              <br />
              Source ={this.state.modalContent.source}
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

export default articleList;
