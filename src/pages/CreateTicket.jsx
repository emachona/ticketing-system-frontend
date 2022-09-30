import React from "react";
import axios from "axios";

class CreateTicket extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      name:"",
      description:"",
      createdOn: new Date(),
      location:"",
      urgency:false,
      msg:"prazno"
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange = (event) => {
      this.setState({description: event.target.value});
  }

  handleLocationChange = (event) => {
    this.setState({location: event.target.value});
  }

  handleUrgencyChange = (event) => {
      this.setState({urgency: true});
  }

  handleDatumChange = (event) => {
    this.setState({createdOn: event.target.value})
  }

   handleSubmit = (event) => {
    event.preventDefault();
    const ticket = {name: this.state.name, description: this.state.description, createdOn: this.state.createdOn, location: this.state.location, urgency: this.state.urgency};
    axios.post('http://localhost:8080/tickets/create', ticket).then((response) => {
        const {m} = response.data;
        this.setState({ msg: m }); //ne ja polni porakata iako uspeshno kreira ticket
        console.log(this.state.msg);})
      .catch((error) => {
        console.log(error);
      });
    alert(this.state.msg)
  }

  render(){
    return(
      <>
      <h3 >Create a Ticket</h3>
      <hr></hr>
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>Title of ticket:
                <input 
                type="text"
                placeholder="Title"
                onChange={this.handleNameChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Description:
                <input 
                type="text"
                placeholder="Description"
                onChange={this.handleDescriptionChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Location:
                <input 
                type="text"
                placeholder="Location"
                onChange={this.handleLocationChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Date:
                <input 
                type="date"
                onChange={this.handleDatumChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>
                <input
                type="checkbox"
                onChange={this.handleUrgencyChange}
                />
                Urgent
            </label>
            <span>  | </span>
            <input type="submit" />
            </form>
        </div>
        </>
      )
  }

}

export default CreateTicket;