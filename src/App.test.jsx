import { logRoles } from '@testing-library/dom'
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";

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

describe('Checkbox flow', () => {
  render(<App/>)

  const buttonElement = screen.getByRole('button', { name: /blue/i })
  const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i })

  describe('when NOT checked',() => {
    test('must be enabled', () => {
      expect(buttonElement).toBeEnabled();
    })
    test('must NOT be gray', () => {
      expect(buttonElement).not.toHaveClass('gray')
    })
  })

  describe('when first clicked', () => {
    fireEvent.click(checkboxElement);
    test('must be checked', () => {
      expect(checkboxElement).toBeChecked();
    })
    test('must be disabled',() =>{
      expect(buttonElement).toBeDisabled();
    })
  })

  describe('when clicked the second time', () => {
    fireEvent.click(checkboxElement);
    test('must NOT be checked',() =>{
      expect(checkboxElement).not.toBeChecked();
    })
    test('must be enabled', () =>{
      expect(buttonElement).toBeEnabled();
    })
  })
})