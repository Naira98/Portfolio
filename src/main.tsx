import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ActiveSectionProvider from "./context/ActiveSectionContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OpenProjectContextProvider from "./context/OpenProjectContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ActiveSectionProvider>
              <OpenProjectContextProvider>
                <App />
              </OpenProjectContextProvider>
            </ActiveSectionProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
