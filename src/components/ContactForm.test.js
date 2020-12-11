import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders ContactForm component without errors', () => {
    render(<ContactForm />);
})

test("user can fill out and submit form", async () => {
    // Arrange
    render(<ContactForm />);

    // Act
    // query for each input field with RTL matchers
    await act(async() => {
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByRole("button", {name: /submit/i})

    // add text to the fields (use labelText and userText)
    // fill out the form
    userEvent.type(firstNameInput, "Ton");
    userEvent.type(lastNameInput, "So");
    userEvent.type(emailInput, "tony@lambdaschool.com");
    userEvent.type(messageInput, "Hello world");

    // click the button 
    userEvent.click(button);
    });
    
    // Assert - make sure that the animal added is now on the page
    const tonySo = screen.getByText(/ton/i)
    expect(tonySo).toBeInTheDocument();
})