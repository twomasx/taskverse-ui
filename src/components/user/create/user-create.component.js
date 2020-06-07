import React, { Component } from "react";
import { Form, Input, Button, AutoComplete } from "antd";

export default class UserCreate extends Component {
  componentName = "User Create Component";

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

  render = () => {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Form
          {...this.layout}
          style={{ margin: "30px 0px 0px 0px" }}
          name="basic"
        >
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item {...this.buttonWrap}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
}
