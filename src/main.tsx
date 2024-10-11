import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const { worker } = await import("./mocks/browser");

// `worker.start()` returns a Promise that resolves
// once the Service Worker is up and ready to intercept requests.
await worker.start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
