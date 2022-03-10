import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import Navbar from './component/Navbar';
import UserList from './component/UserList';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <br />
        <br />
  
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
