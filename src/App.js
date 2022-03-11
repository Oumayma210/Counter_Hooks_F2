import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <h1>Hello ela majd skander! </h1>
            <button onClick={() => setShow(!show)}>Show !!</button>

            {/* {show == true ? <Counter /> : null} */}
            {show && <Counter />}
        </div>
    );
}

export default App;
