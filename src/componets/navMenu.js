import React, { Component } from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

export class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu pointing>
          <MenuItem name="GDIS Technical Assesment" />
          <Link to="/">
            <MDBBtn>Home</MDBBtn>
          </Link>

          <Menu.Menu position="right">
            <Menu.Item name="Taufik Hidayat" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavbarMenu;
