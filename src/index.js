import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Modal from "react-modal";


// Define app element for react-modal
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

reportWebVitals();
