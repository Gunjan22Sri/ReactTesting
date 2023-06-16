import React, { useState } from "react";

import '../index.css'

function Count() {

    const [initialValue, updatedValue] = useState(1);
    function increment() {
        updatedValue(initialValue+1)

    }
    console.log(useState(1));
    return (
        <div>
            <h1>{initialValue}</h1>
            <button className="btn" onClick={increment}>Increment</button>
        </div>
    );
}

export default Count;