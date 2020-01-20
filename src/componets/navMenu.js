import React, { Component } from "react";
import { Input, Menu, MenuItem } from "semantic-ui-react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu pointing>
          <MenuItem name="GDIS Technical Assesment" />
          <Link to="/">
            <MDBBtn>Home</MDBBtn>
          </Link>
          <MDBBtn>Add New Subject</MDBBtn>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search Subject" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
