import React, { useState } from "react";

function ColorPicker() {
    // State to track selected colour
    const [color, setColor] = useState("Red");

    // Handle dropdown change
    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Pick your favourite colour:</h2>

            <select value={color} onChange={handleChange}>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
            </select>

            <h3 style={{ color: color, marginTop: "20px" }}>
                Your favourite colour is: {color}.
            </h3>
        </div>
    );
}

export default ColorPicker;
