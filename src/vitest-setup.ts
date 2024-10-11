// import { cleanup } from "@testing-library/react";
// import { worker } from "./mocks/browser";

// // from https://mswjs.io/docs/getting-started/integrate/node#setup
// // Establish API mocking before all tests.
// beforeAll(async () => {
//   await worker.start({ onUnhandledRequest: "error" });
// });

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => {
//   worker.resetHandlers();
//   cleanup();
// });

// // Clean up after the tests are finished.
// afterAll(() => {
//   worker.stop();
// });
