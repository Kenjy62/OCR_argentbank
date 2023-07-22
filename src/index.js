//Required
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Pages
import Home from "./pages/home";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

// Hooks
import Protected from "./pages/protected";

// Style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);
