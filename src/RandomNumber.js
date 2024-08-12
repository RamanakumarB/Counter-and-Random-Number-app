import { useState } from "react";
import './styles.css'; 

function RandomNumber() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 101));

    function generateRandomNumber() {
        const newNumber = Math.floor(Math.random() * 101);
        setNumber(newNumber);
    }

    return (
        <div className="random-number-container">
            <h1>Random Number Generator</h1>
            <h1>{number}</h1>
            <button className="button" onClick={generateRandomNumber}>Random Number</button>
        </div>
    );
}

export default RandomNumber;





