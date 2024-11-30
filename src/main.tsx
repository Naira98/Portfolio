import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ActiveSectionProvider from "./context/ActiveSectionContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OpenProjectContextProvider from "./context/OpenProjectContext.tsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://933f970a055d21d706b4de342ce713bc@o4508360462761984.ingest.de.sentry.io/4508382357356624",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],

  enabled: process.env.NODE_ENV == "production",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver.io\/api/],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
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
