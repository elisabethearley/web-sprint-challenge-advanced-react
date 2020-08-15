import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {queryByTestId} = render(
        <CheckoutForm />
    );
    expect(queryByTestId("header")).toBeTruthy;
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText} = render(
        <CheckoutForm />
    );
    
    const firstNameEntry = getByLabelText(/First Name/i);
    const lastNameEntry = getByLabelText(/Last Name/i);
    const addressEntry = getByLabelText(/Address/i);
    const cityEntry = getByLabelText(/City/i);
    const stateEntry = getByLabelText(/State/i);
    const zipEntry = getByLabelText(/Zip/i);

    fireEvent.change(firstNameEntry, {
        target: {name: "firstName", value: "Liz"}
    });
    fireEvent.change(lastNameEntry, {
        target: {name: "firstName", value: "Earley"}
    });
    fireEvent.change(addressEntry, {
        target: {name: "address", value: "Home"}
    });
    fireEvent.change(cityEntry, {
        target: {name: "city", value: "ATL"}
    });
    fireEvent.change(stateEntry, {
        target: {name: "state", value: "GA"}
    });
    fireEvent.change(zipEntry, {
        target: {name: "state", value: "00000"}
    });
});
