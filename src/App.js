import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPage from './pages/RegisterPage';
import Tickets from './pages/Tickets';
import Technicians from './pages/Technicians';
import Clients from './pages/Clients';
import CreateTicket from './pages/CreateTicket'
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/technicians" element={<Technicians />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/create" element={<CreateTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
