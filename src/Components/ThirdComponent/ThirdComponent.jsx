import React, { useState, useEffect } from "react";

const CounterWithBackgroundChange = () => {
    const [count, setCount] = useState(0);
    const [incrementMode, setIncrementMode] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    useEffect(() => {
        if (count === 10) {
            setBackgroundColor("orange");
        } else if (count === 100) {
            setBackgroundColor("blue");
        } else if (count === 1000) {
            setBackgroundColor("red");
        } else {
            setBackgroundColor("white");
        }
    }, [count]);

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
        } else if (count < 100) {
            setCount(count + 10);
        } else if (count < 1000) {
            setCount(count + 100);
        } else {
            setIncrementMode(false);
        }
    };

    const handleDecrement = () => {
        if (count > 100) {
            setCount(count - 100);
        } else if (count > 10) {
            setCount(count - 10);
        } else if (count > 0) {
            setCount(count - 1);
        } else {
            setIncrementMode(true);
        }
    };

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                height: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
        >
            <h1>Count: {count}</h1>
            {incrementMode ? (
                <button onClick={handleIncrement}>Increase</button>
            ) : (
                <button onClick={handleDecrement}>Decrease</button>
            )}
        </div>
    );
};

export default CounterWithBackgroundChange;