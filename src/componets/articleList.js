import React, { Component } from "react";
import axios from "axios";
import NavMenu from "./navMenu";
import {Card} from 'semantic-ui-react';

export class articleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GEVgiEzMU0JO9ogWT15SbJKBoPGfiGDg
            `
      )
      .then(response => {
        this.setState({ articles: response.data.response.docs});
        console.log(response.data.response.docs);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <NavMenu />
        <h1>Article List</h1>
        {this.state.articles &&
          this.state.articles.map((articles, index) => {
            return (
              <Card.Group>
                <Card key={articles.index} href>
                  {articles.abstract}
                </Card>
              </Card.Group>
            );
          })}
      </div>
    );
  }
}

export default articleList;
