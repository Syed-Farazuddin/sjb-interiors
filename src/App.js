import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import UsersTable from "./Components/AdminDashboard/UsersTable";
// import { Login } from "./Components/Login/Login";
// import { Register } from "./Components/Register/Register";
import Home from "./Components/Home/Home";

// import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/users" element={<UsersTable />} /> */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
