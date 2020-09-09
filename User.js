import React from 'react';

const User = (props) => {
    let age = props.age ? props.age : "NA";

    if(props.children){
        return (
            <div>
                {props.children},
                Age: {props.age}
            </div>
        )
    }
    else{
        return (
            <div>
                <span style={{color:'red'}}>Sorry, No Data Available</span>
            </div>
        )
    }

   
}

export default User;