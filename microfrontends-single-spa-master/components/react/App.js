import React,{ useEffect, useState } from "react"
import "./App.css"

const App = () => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        window.addEventListener('onIncrement', () => {
            setVal(window.myapp.counter);
        });
        window.addEventListener('onDecrement', () => {
            setVal(window.myapp.counter);
        });
    },[])

    return (
        <div className="mainSection">
            <h1>Hello from React</h1>
            <p>Counter is {val}</p>
            <input type="button" onClick={() => window.myapp.incrementor()} value="+"></input>
            <input type="button" onClick={() => window.myapp.decrementor()} value="-"></input>
        </div>
    )
}

export default App