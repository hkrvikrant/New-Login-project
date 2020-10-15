import React, { Component } from "react";

import {
  LogoW,
  Logo,
  Wrap,
  Nav,
  Message,
  SideBarNav,
} from "./Style";

class SideBar extends Component {
  render() {
    return (
      <Wrap>
        <LogoW>
          <Logo>
            <img
              src={require("../../assests/Images/group-6.png")}
              alt="nav button"
            ></img>
          </Logo>
          SBG.ai
        </LogoW>
        <SideBarNav>
          <Nav>
            <li>
              <button>
                <img
                  src={require("../../assests/Images/group-2.png")}
                  alt="nav button"
                ></img>
              </button>
            </li>
            <li>
              <button>
                <img
                  src={require("../../assests/Images/group-copy.png")}
                  alt="nav button"
                ></img>
              </button>
            </li>
            <li>
              <button>
                <img
                  src={require("../../assests/Images/group-copy-2.png")}
                  alt="nav button"
                ></img>
              </button>
            </li>
          </Nav>
          <Message>
            <img
              src={require("../../assests/Images/message-icon.png")}
              alt="nav button"
            ></img>
            <span>Get in touch</span>
          </Message>
        </SideBarNav>
      </Wrap>
    );
  }
}
export default SideBar;
