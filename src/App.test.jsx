import { render, screen } from "@testing-library/react";
import App from "./App";

test("Empty Test", () => {

});

// test("Test throws error explicitly", () => {
//   throw new Error('fail this test!')
// });

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).not.toBeInTheDocument();
});

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});
