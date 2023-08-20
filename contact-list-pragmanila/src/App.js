import React from "react";

import Homepage from "./components/Homepage";
import AddUserModal from "./components/AddUserModal";
import EditUserModal from "./components/EditUserModal";

import "./styles/main_style.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="
      
      w-screen
      
      "
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-User" element={<AddUserModal />} />
        <Route path="/editUser/:id" element={<EditUserModal />} />
      </Routes>
    </div>
  );
}

export default App;
