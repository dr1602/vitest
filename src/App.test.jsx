import { logRoles } from '@testing-library/dom'
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";

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

  // find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i })
  const checkboxElement = screen.getByRole('checkbox', { 
    name: /disable button/i,
  })

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox to be disabled button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeDisabled()
  expect(buttonElement).toHaveClass('gray')

  // click checkbox again to re-enable button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('red')
})

test('checkbox flow after button click', () => {
  // render App
  render(<App />);

  //find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  })

  // click button to change to blue
  fireEvent.click(buttonElement);

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray')

  // click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('blue')
})