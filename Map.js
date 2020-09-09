import React from 'react';

function Map() {

    const arr = [10,20,30,40,50]
    // const newArr = arr.map((value) => {
    //     value++;
    //     return value;
    // })

    const stringArr = [
        { price: "100", product: "Mobile" },
        { price: "200", product: "Laptop" },
        { price: "300", product: "Mic" },
        { price: "400", product: "TV" },
    ];
    // const newStringArr = stringArr.map((value) => {
    //     return value;
    // })

    return (
        <div>
            <h1>Map function</h1>
            <h3>Number Array</h3>
            {arr.map((item) => {return <p > {item}</p >})}
            <h3>String Array</h3>
            {stringArr.map((item) => {return <p > {item.price} | {item.product}</p >})}
        </div>
    );
}

export default Map;