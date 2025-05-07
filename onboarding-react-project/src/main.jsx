/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import APIcall from "./api/api_call.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

    <header className="fixed top-2 left-2 right-2 w-full bg-blue-100 shadow-md z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <nav className="flex">
            <ul className="flex space-x-6">
              <li>
                <Link className="text-blue-500 hover:text-blue-800" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-blue-500 hover:text-blue-800" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="text-blue-500 hover:text-blue-800" to="/api-call">
                  API Call
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/api-call" element={<APIcall />} />
      </Routes>

    </BrowserRouter>

  </StrictMode>,
);
