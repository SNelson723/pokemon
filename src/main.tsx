import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* store */}
    <Provider store={store}>
      {/* router */}
      <BrowserRouter>
      {/* App */}
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='team' element={<div>My Team</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <App />
    </Provider>
  </StrictMode>
);
