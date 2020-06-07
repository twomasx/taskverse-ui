import React, { Component } from "react";
import UserCreate from "./create/user-create.component";
import UserLogin from "./login/user-login.component";
export default class User extends Component {
  componentName = "User Component";

  constructor() {
    super();
    this.state = {
      signUp: true,
    };
  }

  needsLogin = () => {
    this.setState({
      signUp: !this.state.signUp,
    });
  };

  render = () => {
    return (
      <div>
        {this.state.signUp ? (
          <>
            <UserCreate />
            <a
              onClick={() => this.needsLogin()}
              style={{ fontSize: "12px", fontStyle: "italic" }}
              href="#"
            >
              (Already have an account? Log in. )
            </a>
          </>
        ) : (
          <>
            <UserLogin />
            <a
              onClick={() => this.needsLogin()}
              style={{ fontSize: "12px", fontStyle: "italic" }}
              href="#"
            >
              (Don't have an account? Sign Up. )
            </a>
          </>
        )}
      </div>
    );
  };
}
