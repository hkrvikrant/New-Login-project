import React, { Component } from "react";

import {
  Head,
  LoginIcon,
  Btn,
  ProfileHead,
  LogOut,
} from "./Style";

class Header extends Component {
  state = {
    navItems: [
      {
        link: "My Dashboard",
        id: 0,
        map: "/dashBoard",
      }
    ],
  };
  
  render() {
    return (
      <Head>
        <ProfileHead>
          <span style={{flex:1,display:'flex'}}>
            <Btn>My Dashboard</Btn>
            <Btn>View CaseStudy</Btn>
          </span>
            <LoginIcon>
                <img
                  src={require("../../assests/Images/oval.png")}
                  alt="Profile icon"
                />
            </LoginIcon>
            <LogOut>
              LogOut
            </LogOut>
        </ProfileHead>
      </Head>
    );
  }
}
export default Header;
