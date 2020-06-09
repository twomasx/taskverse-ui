import React, { Component } from "react";
import { Form, Input, Button, AutoComplete } from "antd";

export default class UserLogin extends Component {
  componentName = "User Login Component";
  loggedInUser = {};

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };

  buttonWrap = {
    wrapperCol: { span: 11, offset: 12 },
  };

  formDesign = {
    width: "400px",
  };

  handleChange = (event) => {
    this.setState({
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    });
    event.preventDefault();
  };

  submitForm = async() => {
    const userObj = {
      username: this.state.username,
      password: this.state.password,
      loggedInUser: {}
    };
    const urlObj = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    };
    try {
      const user = await fetch('http://localhost:9000/login', urlObj);
      const loggedInUser = await user.json();
      this.setState({
        loggedInUser
      });
    } catch(err) {
      console.log(err);
    }
  };

  render = () => {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Form
          {...this.layout}
          style={{ margin: "30px 0px 0px 0px" }}
          name="basic"
          onChange={this.handleChange}
          onFinish={this.submitForm}
        >
          <Form.Item label="Username">
            <Input name="username" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password name="password" />
          </Form.Item>
          <Form.Item {...this.buttonWrap}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
    <p> {JSON.stringify(this.state.loggedInUser)}</p>
      </div>
    );
  };
}
