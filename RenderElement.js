import React from 'react';
// import ReactDOM from 'react-dom';

function RenderElement(props) {
    return (
        <div>
            <h1>Rendering Element</h1>
            <h4>Hey, i am {props.name}</h4>
        </div>
    );
}


// ReactDOM.render(<RenderElement name="Bharti" />,document.getElementById("mydiv"));
export default RenderElement;