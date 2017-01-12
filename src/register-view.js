const React = require('react');

const RegisterForm = require('./register-form');



class RegisterView extends React.Component{

  constructor(props){

    super(props);

  }

  render(){

    return(
      <div className="col-md-4">
        <RegisterForm newRegister={this.props.newRegister}/>
      </div>
    )

  }

}

RegisterView.PropTypes = {

  newRegister: React.PropTypes.object.isRequired

};

module.exports = RegisterView;
