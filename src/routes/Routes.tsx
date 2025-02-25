import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/auth/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "@/hooks/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
