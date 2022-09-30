import React from 'react';
import { Link } from 'react-router-dom'

class Tickets extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            items: [],
            showAction: false
        }
      }

    async componentDidMount() {
        const res = await fetch('http://localhost:8080/tickets');
        const data = await res.json();
        console.log(data);
        this.setState({items: data});
    }

    // handleClick() {
    //    alert("Open edit form");
    //   }

    render() {
        if(!this.state.items){
            return null
        }
        return (
            <div className='tableContainer'>
                <h3>All tickets</h3>
                <br></br>
                <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">State</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Location</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Approver</th>
                    <th scope="col">Urgency</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(i => (
                        <tr key={i.id}
                        onMouseEnter={() => this.setState({showAction: true})}
                        onMouseLeave={() => this.setState({showAction: false})}>
                            <td>{i.id}</td>
                            <td>{i.state}</td>
                            <td>{i.name}</td>
                            <td>{i.createdOn}</td>
                            <td>{i.location}</td>
                            <td>{i.description}</td>
                            <td>{i.assignee === null ? "not assigned yet" : i.assignee.name}</td>
                            <td>{i.summary}</td>
                            <td>{i.approver === null ? "not reviewed yet" : i.approver.name}</td>
                            <td>{(i.urgency)? "URGENT" : "not urgent"}</td>
                            {/* pencil icon da se zema od pencil.svg file i linkot da nosi do edit page(ne login) */}
                            <td>{this.state.showAction ? <Link to={'/Login'}><button className="editBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                        </svg></button></Link> : ""}</td>
                        </tr>
                    )
                    )}
                </tbody>
                </table>
            </div>
            )
    }

}

export default Tickets;