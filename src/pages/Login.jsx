import React from "react";
import axios from 'axios';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            usernameValue: "",
            passwordValue: "",
            role: ""
        };
    }

    handleUnameChange = (event) => {
        this.setState({usernameValue: event.target.value});
    }

    handlePassChange = (event) => {
        this.setState({passwordValue: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/users/login?username='+ this.state.usernameValue + '&password='+ this.state.passwordValue)
        .then((response) => {
            this.setState({role: response.data.name})});
      }

    render() {
        return (
            <>
            <div className="container_title-wrapper">
                <h3>Log in</h3>
                <hr></hr>
            </div>
            <div className="container__from-wrapper">
                <form onSubmit={this.handleSubmit}>
                <label>Enter your name:
                    <input 
                    type="text"
                    placeholder="Username"
                    onChange={this.handleUnameChange}
                    />
                </label>
                <br></br>
                <br></br>
                <label>Enter your password:
                    <input 
                    type="password"
                    placeholder="Password"
                    onChange={this.handlePassChange}
                    />
                </label>
                <br></br>
                <br></br>
                <input type="submit" />
                </form>
            </div>
            <p>{this.state.role}</p>
            </>
          )
    }

}
export default Login;
