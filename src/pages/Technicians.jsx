import React from 'react';

class Technicians extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            items: []
        }
      }

    async componentDidMount() {
        const res = await fetch('http://localhost:8080/users/technicians');
        const data = await res.json();
        console.log(data);
        this.setState({items: data});
    }

    render() {
        if(!this.state.items){
            return null
        }
        return (
            <div className='tableContainer'>
                <h3>All technicians</h3>
                <br></br>
                <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">username</th>
                    <th scope="col">Role</th>
                    <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.items.map(i => {
                    return !(i.active) ?
                        <tr key={i.id} className="bg-secondary">
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.username}</td>
                            <td>{i.role}</td>
                            <td>{(i.active)? "ACTIVE" : "INACTIVE"}</td>
                        </tr>
                        :
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.username}</td>
                            <td>{i.role}</td>
                            <td>{(i.active)? "ACTIVE" : "INACTIVE"}</td>
                        </tr>
                    }
                )}
                </tbody>
                </table>
            </div>
            )
    }

}

export default Technicians;