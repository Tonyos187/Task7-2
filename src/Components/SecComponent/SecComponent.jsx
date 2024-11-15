import React, { useState, useEffect } from "react";

const CounterWithPopUp = () => {
    const [count, setCount] = useState(0);
    const [incrementMode, setIncrementMode] = useState(true);
    const [popUpMessage, setPopUpMessage] = useState(""); 
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        setPopUpMessage("hellooo");
        setShowPopUp(true);

        const timer = setTimeout(() => setShowPopUp(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (count === 10 || count === 100 || count === 1000) {
            setPopUpMessage(`reached ${count}!`);
            setShowPopUp(true);

            const timer = setTimeout(() => setShowPopUp(false), 3000); 
            return () => clearTimeout(timer);
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
        <div>
            <h1>Count: {count}</h1>
            {incrementMode ? (
                <button onClick={handleIncrement}>Increase</button>
            ) : (
                <button onClick={handleDecrement}>Decrease</button>
            )}

            {showPopUp && (
                <div>
                    <p>{popUpMessage}</p>
                </div>
            )}
        </div>
    );
};

export default CounterWithPopUp;