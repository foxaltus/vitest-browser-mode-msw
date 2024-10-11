import { cleanup, render } from "@testing-library/react";
import { expect, test } from "vitest";
import HelloWorld from "./HelloWorld.js";
import { worker } from "./mocks/browser.js";
import { http, HttpResponse } from "msw";

// from https://mswjs.io/docs/getting-started/integrate/node#setup
// Establish API mocking before all tests.
beforeAll(async () => {
  await worker.start({ onUnhandledRequest: "error" });
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  worker.resetHandlers();
  cleanup();
});

// Clean up after the tests are finished.
afterAll(() => {
  worker.stop();
});

test("renders name", () => {
  const { getByText } = render(<HelloWorld name="Vitest" />);
  const element = getByText("Hello Vitest!");
  expect(element).toBeInTheDocument();
});

test("tells a joke", async () => {
  const { findByText } = render(<HelloWorld name="Chuck" />);
  const element = await findByText(/Chuck Norris can win connect four/);
  expect(element).toBeInTheDocument();
});

test("tells another joke", async () => {
  worker.use(
    http.get("https://api.chucknorris.io/jokes/random", () =>
      HttpResponse.json({
        icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
        id: "ihYDJ5NcT4mgj1vN5taKVQ",
        url: "https://api.chucknorris.io/jokes/ihYDJ5NcT4mgj1vN5taKVQ",
        value: "Chuck Norris can milk a bucket with a cow.",
      })
    )
  );
  const { findByText } = render(<HelloWorld name="Chuck" />);
  const element = await findByText(/Chuck Norris can milk a bucket/);
  expect(element).toBeInTheDocument();
});
