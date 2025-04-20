import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BubbleFlame from "./component/BubleFrame.jsx";
import NotFound from "./NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import PrivacyPolicy from "./privacy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* Your main content goes here */}
  </>
);
