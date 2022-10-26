import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./reducers/store";
import Login from "./components/container/login";
import HomePage from "./components/container/HomePage";
import Register from "./components/container/register";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
