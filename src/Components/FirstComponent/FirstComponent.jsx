import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const [incrementMode, setIncrementMode] = useState(true); 

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
        <div>
            <h1>Count: {count}</h1>
            {incrementMode ? (
                <button onClick={handleIncrement}>Increase</button>
            ) : (
                <button onClick={handleDecrement}>Decrease</button>
            )}
        </div>
    );
};

export default CounterComponent;