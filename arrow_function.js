import React from 'react';
import { FeedSummary } from 'semantic-ui-react';

function Sum(a,b){
    return a + b;
}

// let sum = (a,b) => a + b;

function IsPositive(number){
    return number >= 0 ? number : null;
}

// let IsPositive = number => number >= 0;

function RandomNumber(){
    return Math.random();
}

// let RandomNumber = () => Math.random;

document.addEventListener('click', function(){
    console.log('click');
})

// document.getElementById('click', () => console.log('click'));

function ArrowFunction() {
    return (
        <div>
            <h1> Arrow function </h1>
            <p>Sum is: {Sum(2,3)}</p>
            <p>Number is: {IsPositive(3)}</p>
            <p>Random number is: {RandomNumber()}</p>
        </div>
    );
}

export default ArrowFunction;