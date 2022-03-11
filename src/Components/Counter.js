import React, { useEffect, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("component did mount");
        console.log("component did update");

        return () => {
            console.log("component will unmount");
        };
    }, []);

    // const handlePlus = () => {
    //     setCounter(counter + 1);
    // };
    // const handleMinus = () => {
    //     setCounter(counter > 0 ? counter - 1 : counter);
    // };
    return (
        <div>
            {/* <button onClick={handlePlus}>+</button>
            <h1>Count:{counter}</h1>
            <button onClick={handleMinus}>-</button> */}

            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Counter:{counter}</h1>
            <button
                onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
            >
                -
            </button>
        </div>
    );
};

export default Counter;
