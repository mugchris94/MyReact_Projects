import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <label htmlFor="Banner">Portal</label>
                <form action="#" className="login">
                    <label htmlFor="user" className="username">Enter Username</label>
                    <input type="text" placeholder={this.props.username}/><br/>
                    <label htmlFor="paswd">Enter Password</label>
                    <input type="password" placeholder={this.props.pswd}/><br />
                    <button className="btn btn-standard">Submit</button><br />
                    <input type="checkbox" className="check" />
                </form>
            </div>
         );
    }
}
 
export default Portal;