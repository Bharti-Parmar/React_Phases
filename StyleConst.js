import React from 'react';


// first method

function Button({buttonstyle}){
return <button style={buttonstyle}></button>
}


// second method
function StyleConst(props) {

    const style = {
        padding: "10px",
        color: "white",
        backgroundColor: "Black",
        align: "center"
    }

    return (
        <div>
            {/* <button style={style}>StyleButton</button> */}
            <Button buttonstyle={style}>{props.buttonname}</Button>
        </div>
    );
}

export default StyleConst;