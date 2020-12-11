import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

// test('Contains input', () => {
//   const { getByText } = render(<App />);

//   getByText(/First Name/i);
//   getByText(/Last Name/i);
//   getByText(/email/i);
//   getByText(/message/i);
// })

test('contains input', () => {
  // Arrange
  render(<App />);

  // Act
  const input = screen.getByText(/first name/i)

  // Assert
  expect(input).toBeInTheDocument();
  
  // Other possible assertions
  expect(input).toHaveTextContent(/first name/i)

  // Negative assertions
  expect(input).not.toBeNull()
})