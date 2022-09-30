import React from "react";
import axios from "axios";

class RegisterPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      username:"",
      password:"",
      fullname:"",
      msg:""
    }
  }

  handleUnameChange = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassChange = (event) => {
      this.setState({password: event.target.value});
  }

  handleFullnameChange = (event) => {
    this.setState({fullname: event.target.value});
}

   handleSubmit = (event) => {
    event.preventDefault();
    const user = {username: this.state.username, password: this.state.password, name: this.state.fullname};
    axios.post('http://localhost:8080/users/client/createProfile' , user).then((response) => {
        const {r} = response.data.msg; //zema response OK
        this.setState({ msg: r }); //tuka ne mu dava vrednost na msg
        console.log(this.state.msg);})
      .catch((error) => {
        console.log(error);
      });
    alert(this.state.msg)
  }

  render(){
    return(
      <>
      <h3 >Sign In</h3>
      <hr></hr>
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>Enter your full name:
                <input 
                type="text"
                placeholder="Full Name"
                onChange={this.handleFullnameChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Set your username:
                <input 
                type="text"
                placeholder="Userame"
                onChange={this.handleUnameChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Set your password:
                <input 
                type="password"
                placeholder="Password"
                onChange={this.handlePassChange}
                />
            </label>
            <br></br><br></br>
            <input type="submit" />
            </form>
        </div>
        </>
      )
  }

}

export default RegisterPage;