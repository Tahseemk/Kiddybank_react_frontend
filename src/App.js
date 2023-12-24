import React from "react";
import { ToastContainer } from "react-toastify";
import RootRouter from "./Routers/RootRouters";
import './app.css';

function App() {
  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <RootRouter />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
