import React from "react";
import "./css/typography.css"
import "./css/form-elements.css"
import "./css/custom-components.css"
import "./css/alignment.css"
import "./css/themes.css"
import "./css/layout.css"
import Register from "./pages/Register/index";
import Dashboard from "./pages/Dashboard/index"
import Transactions from "./pages/Transactions/index"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Requests from "./pages/Requests/index"
import PublicRoute from "./components/PublicRoutes";
import Profile from "./pages/Profile";
import Users from "./pages/Users";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route exact path="/" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route exact path="/profile" element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
        <Route exact path="/users" element={<ProtectedRoutes><Users/></ProtectedRoutes>} />
        <Route exact path="/transactions" element={<ProtectedRoutes><Transactions /></ProtectedRoutes>} />
        <Route exact path="/requests" element={<ProtectedRoutes><Requests /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}
