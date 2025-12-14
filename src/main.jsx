import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Missing Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ClerkProvider>
    ) : (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Configuration Error</h1>
        <p>Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file</p>
      </div>
    )}
  </StrictMode>
);
