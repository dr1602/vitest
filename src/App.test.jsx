import { logRoles } from '@testing-library/dom'
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("Empty Test", () => {

});

// test("Test throws error explicitly", () => {
//   throw new Error('fail this test!')
// });

// test("App contains correct heading", () => {
//   render(<App />);
//   const headingElement = screen.getByText(/learn react/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// test("App contains correct heading", () => {
//   render(<App />);
//   const headingElement = screen.getByText(/learn react/i);
//   expect(headingElement).toBeInTheDocument();
// });

test('Button click flow', () => {
  const { container } = render(<App/>)
  logRoles(container)
  
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  expect(buttonElement).toHaveClass('red')

  fireEvent.click(buttonElement)

  expect(buttonElement).toHaveTextContent(/red/i)

  expect(buttonElement).toHaveClass('blue')

})

test('Checkbox flow', () => {
  render(<App/>)

  const buttonElement = screen.getByRole('button', { name: /blue/i })
  const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i })

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();

})