import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Profile from "./pages/Profile/";
import Settings from "./pages/Settings/";
import Community from "./pages/Community/";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/profile" element={<Layout children={<Profile />} />} />
        <Route path="/settings" element={<Layout children={<Settings />} />} />
        <Route
          path="/community"
          element={<Layout children={<Community />} />}
        />
        <Route path="*" element={<Layout children={<Error />} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
