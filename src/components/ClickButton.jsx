import React, { useState } from "react";

function ClickButton(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log(count);   // log current count
        setCount(count + 1);  // increment count internally
    };

    return (
        <button onClick={increment}>
            {props.title}  
        </button>
    );
}

export default ClickButton;
