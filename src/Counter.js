import { useState } from "react";
import './styles.css'; 

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function decrement() {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button className="button" onClick={increment}>INC</button>
            <button className="button" onClick={decrement}>DEC</button>
        </div>
    );
}

export default Counter;

