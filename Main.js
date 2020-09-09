import React, { Component } from 'react';
import Content from './Content';

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    username: 'Bharti',
                    profession: 'Engineer'
                },
                {
                    id: 2,
                    username: 'Arti',
                    profession: 'CA'
                },
                {
                    id: 3,
                    username: 'Mayank',
                    profession: 'Doctor'
                }

            ]
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.data.map((dynamicData, index) => <Content key={index} userdata={dynamicData} />)}
            </div>
        );
    }
}

export default Main;