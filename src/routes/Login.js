import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';
// import styles from './Login.css';

const FormItem = Form.Item
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'login/login',
          payload: values,
        });
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="flex column jc-center ai-center">
        <h2>Log in</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input placeholder="username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }]
            })(
              <Input type="password" placeholder="password" />
              )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >Log in</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps() {
  // console.log(wtf);
  return {};
}
// function mapStateToProps({ login }) {
//   console.log(login);
//   return { login };
// }

export default connect(mapStateToProps)(Form.create()(Login));