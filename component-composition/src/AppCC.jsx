import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [name, setName] = useState("Colin");

    return (
        <div className="App">
            <Outer>
                <Middle>
                    <Inner name={name} />
                </Middle>
            </Outer>
        </div>
    );
}

function Outer({ children }) {
    return <div>{children}</div>;
}

function Middle({ children }) {
    return <div>{children}</div>;
}

function Inner({ name }) {
    return <div>Hello {name}</div>;
}

export default App;
