import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./components/Team.tsx";
import Home from "./components/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* store */}
    <Provider store={store}>
      {/* router */}
      <BrowserRouter>
      {/* App */}
        <Routes>
          <Route path='/' element={<App />}>
            <Route index  element={<Home />} />
            <Route path='team' element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
