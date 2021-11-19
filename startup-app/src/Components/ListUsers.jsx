import React, { Component } from 'react';
import '../Static/ListUsers.css';
import "bootstrap/dist/css/bootstrap.min.css";

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 
            <div className="container">
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>

                    </tr>
                    <tr>
                        <td>{this.props.Id}</td>
                        <td>{this.props.Name}</td>
                        <td>{this.props.Email}</td>
                        <td>{this.props.Company}</td>
                    </tr>
                    <tr>
                        <td>{this.props.Id}</td>
                        <td>{this.props.Name}</td>
                        <td>{this.props.Email}</td>
                        <td>{this.props.Company}</td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default ListUsers;