import React from 'react';

function FunctionComp(props){
    return (
        <div>
            <h1>Functional Component</h1>
            <h3>Hello Bharti {props.surname}</h3>
        </div>
    )
}

// Secound method

// const FunctionComp = (props) =>{
//     return (
//         <h1>Functional Components</h1>
//         <h3>I am Bharti {props.surname}</h3>
//     )
// }

export default FunctionComp;