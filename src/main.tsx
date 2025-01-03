import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";
import ActiveSectionProvider from "./context/ActiveSectionContext/ActiveSectionProvider.tsx";
import OpenProjectContextProvider from "./context/OpenProjectContext/OpenProjectProvider.tsx";
import IsProjectsExpandedContextProvider from "./context/IsProjectsExpandedContext/IsProjectsExpandedProvider.tsx";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
    <SpeedInsights />
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <IsProjectsExpandedContextProvider>
              <ActiveSectionProvider>
                <OpenProjectContextProvider>
                  <HelmetProvider>
                    <App />
                  </HelmetProvider>
                </OpenProjectContextProvider>
              </ActiveSectionProvider>
            </IsProjectsExpandedContextProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
