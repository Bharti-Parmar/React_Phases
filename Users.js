import React, { Component } from 'react';
import User from './User'

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User>Bharti</User>
                <User>Arti</User>
                <User>Mayank</User>
                <h1>{this.props.userage}</h1>
                <User age="21">Bharti</User>
                <User age="18">Arti</User>
                <User age="16">Mayank</User>
                <User></User>
            </div>
        );
    }
}

export default Users;