import React, { component } from "react";
import { BrowserRouter, Routes, Route } from "react-route-dom";
import "./App.css";
import { Home } from "./component/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
