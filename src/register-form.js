const React = require('react');

class RegisterForm extends React.Component{

  constructor(props){
    super(props);

    this.newObject = {}

    Object.assign(this.newObject, props.newRegister , {hasError:{email: {error:false , message: ""}, name: {error:false , message: ""}, surname: {error:false , message: ""}, password: {error:false , message: ""}, confirmPassword: {error:false , message: ""}}})

    this.state = this.newObject;

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.setState(this.newObject);

  }

  onChange(e, which){

    let obj = {};
    obj[which] = e.target.value;
    this.setState(obj);

    switch (which){
      case 'email':
        this.emailHasError();
      break;
      case 'name':
        this.nameHasError()
      break;
      case 'surname':
        this.surnameHasError()
      break;
      case 'password':
        this.passwordHasError()
      break;
      case 'confirmPassword':
        this.confirmPasswordHasError()
      break;

    }


  }

  emailHasError(){

    if(!this.isEmail(this.state.email)){

      this.setState({hasError:{email:{error: true, message: "El email introducido no es valido"}}});

    }


    if(this.state.email.length > 32){

      this.setState({hasError:{email:{error: true, message: "El email introducido es demasiado largo"}}});
    }

    console.log(this.state);


  }

  nameHasError(){

    if(this.state.name.length > 16){

      this.setState({hasError:{name:{error: true, message: "El nombre introducido es demasiado largo"}}});
    }

    console.log(this.state);

  }

  surnameHasError(){

    if(this.state.surname.length > 32){

      this.setState({hasError:{surname:{error: true, message: "El apellido introducido es demasiado largo"}}});
    }

    console.log(this.state);

  }

  passwordHasError(){

    if(this.state.password.length > 16){

      this.setState({hasError:{password:{error: true, message: "La contraseña introducida es demasiado larga"}}});
    }

    console.log(this.state);
  }

  confirmPasswordHasError(){

    if(this.state.confirmPassword.length > 16){

      this.setState({hasError:{confirmPassword:{error: true, message: "La contraseña introducida es demasiado larga"}}});
    }

    if(this.state.confirmPassword !== this.state.password){

      this.setState({hasError:{confirmPassword:{error: true, message: "Las contraseñas no coinciden"}}});
    }

    console.log(this.state);

  }

  isEmail(email) {

      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
  }


  render(){

    return(
      <form className="form-horizontal custom" onSubmit={this.onSubmit}>
        <div className="form-group col-md-10">
          <input type="email" className="form-control custom" placeholder="Email" value={this.state.email} onChange={e => {this.onChange(e, 'email')}} required/>
        </div>
        <div className="form-group col-md-10">
          <input type="text" className="form-control custom" placeholder="Nombre" value={this.state.name} onChange={e => {this.onChange(e, 'name')}} required/>
        </div>
        <div className="form-group col-md-10">
          <input type="text" className="form-control custom" placeholder="Apellidos" value={this.state.surname} onChange={e => {this.onChange(e, 'surname')}} required/>
        </div>
        <div className="form-group col-md-10">
          <input type="password" className="form-control custom" placeholder="Contraseña" value={this.state.password} onChange={e => {this.onChange(e, 'password')}} required/>
        </div>
        <div className="form-group col-md-10">
          <input type="password" className="form-control custom" placeholder="Confirmar Contraseña" value={this.state.confirmPassword} onChange={e => {this.onChange(e, 'confirmPassword')}} required/>
        </div>
        <div className="form-group col-md-10">
          <button className="btn custom" type="submit">Crear una cuenta</button>
        </div>
      </form>
    )

  }

}

RegisterForm.PropTypes = {

  newRegister: React.PropTypes.object.isRequired
}

module.exports = RegisterForm;
