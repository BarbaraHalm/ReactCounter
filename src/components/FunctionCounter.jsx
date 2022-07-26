import React from 'react';
import { useState } from 'react';
function FunctionCounter() {
    const [number,setNumber]= useState(0)
    return ( 
    <>
    <h1>FunctionCount : {number}</h1>
            <button onClick={()=>{setNumber(number+1)}}>Increase</button>
            <button onClick={()=>{setNumber(number-1)}}>Decrease</button>
    </>
    );
}

export default FunctionCounter;