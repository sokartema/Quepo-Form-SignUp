const React = require('react');
const ReactDOM = require('react-dom');

const RegisterView = require('./register-view');

const newRegister = {

  email: "",
  name: "",
  surname: "",
  password: "",
  confirmPassword: ""
}

ReactDOM.render(<RegisterView newRegister={newRegister}/>, document.getElementById('react-form'));
