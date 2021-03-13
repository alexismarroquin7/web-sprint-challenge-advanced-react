import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// test comment

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const header = screen.queryByText("Checkout Form");

    //Assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const fnameInput = screen.getByLabelText(/first name:/i);
    const lnameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const checkoutButton = screen.getByTestId("checkoutButton");

    userEvent.type(fnameInput, "Alexis");
    userEvent.type(lnameInput, "Marroquin");
    userEvent.type(addressInput, "608 Walnut St");
    userEvent.type(cityInput, "Roselle Park");
    userEvent.type(stateInput, "NJ");
    userEvent.type(zipInput, "01204");
    userEvent.click(checkoutButton);

    const successMessage = screen.getByTestId("successMessage");

    //Assert
    expect(successMessage).toBeInTheDocument();

});
