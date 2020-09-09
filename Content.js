import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                {/* <h1>Dynamic User Data</h1> */}
                <h3>{this.props.userdata.id} | User Name:  {this.props.userdata.username} | Profession: {this.props.userdata.profession} </h3>
            </div>
        );
    }
}

export default Content;