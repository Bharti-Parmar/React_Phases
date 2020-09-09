import React, { Component } from 'react';

class ClassComponent extends Component {

    // calling by using props
    constructor(props){
        super(props)

        // second method calling by state

        // this.state = {
        //     greeting: 'Hey, I am '
        // }
    }

    render() {

        const arr = ["bharti","parmar"];

        return (
            <div>
                <h1>Class Component</h1>
                <h3>
                    {this.props.greeting}
                    {/* {this.state.greeting} */}
                    {
                        arr.map((Value) => {
                            return (Value + ' ');
                        })
                    }
                </h3>
            </div>
        );
    }
}

export default ClassComponent;