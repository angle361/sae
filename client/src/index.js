import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StateProvider } from './components/StateProvider';

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>,
    document.getElementById("root"));



