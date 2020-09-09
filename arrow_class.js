import React, { Component } from 'react';

class ArrowClass extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: 'Bharti'
        }
    }

    // printNameArrow(){
    //     setTimeout(() => {
    //         console.log('Arrow: ' + this.state.name)
    //     }, 100)
    // }

    // printNameArrow = () => {
    //     function hello(){
    //         return 'hello';
    //     }
    // }

    printNameFunction(){
        setTimeout(function() {
            return this.state.name;
        }, 100)
    }

    render() {

        
        
        return (
            <div>
                <h1> Arrow Class </h1>
                   <p>{this.state.name}</p>
                   <p>{this.printNameArrow}</p>
                   <p>{this.printNameFunction}</p>
            </div>
        );
    }

}


export default ArrowClass;