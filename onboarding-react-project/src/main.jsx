// index.js
/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import APIcall from "./api/api_call.jsx";
import Form from "./Form.jsx";
import "./i18n.js";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./i18n.js";
import UseEffectHook from "./hooks/UseEffectHook.jsx";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <StrictMode>
      <BrowserRouter>
        <header className="fixed top-2 left-2 right-2 w-full bg-blue-100 shadow-md z-50">
          <div className="max-w-screen-xl mx-auto px-4 py-4">
            <nav className="flex">
              <ul className="flex space-x-6">
                <li>
                  <Link className="text-blue-500 hover:text-blue-800" to="/">
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to="/profile"
                  >
                    {t("profile")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to="/api-call"
                  >
                    {t("api_call")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to="/form"
                  >
                    {t("form")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to="/use-effect-hook"
                  >
                    UseEffect Hook
                  </Link>
                </li>

                

                <select
                  value={t.resolvedLanguage}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  {Object.entries(supportedLngs).map(([code, name]) => (
                    <option value={code} key={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api-call" element={<APIcall />} />
          <Route path="/form" element={<Form />} />
          <Route path="/use-effect-hook" element={<UseEffectHook />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
