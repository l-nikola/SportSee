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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
