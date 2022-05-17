import React from "react";

const Counter = () => {

    const [count, setCount] = React.useState(0);


    // const incCount = () => {
    //     setCount(count+1);
    //     console.log(count);
    // }

    // const decCount = () => {
    //     setCount(count-1);
    //     console.log(count);
    // }

    return (
        <div>
            <h1>Likes Counter:{count}</h1>
            {/* <button onClick={incCount}>Increment</button>
            
            <button onClick={decCount}>Decrement</button> */}

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count*2)}>Double</button>
        </div>
    );
};

export default Counter;