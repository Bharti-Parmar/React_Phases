import React from 'react';

// first method

// function Button(props){
//     return <button>{props.label}</button>
// }


// second method

// function Button(label){
//     return <button>{label}</button>
//     console.log("label",label)
// }

// third method

// function Button({children}){
//     return <button>{children}</button>
// }

function MultipleFunc(props) {
    return (
        <div>
            <h1>Work between functions</h1>
            <Button label="click me" />
            {/* <Button>Click Me</Button> */}
        </div>
    );
}

export default MultipleFunc;