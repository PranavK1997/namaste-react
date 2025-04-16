import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header component with a login button", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

it("Should render cart with zero items", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByText("🛒 - (0 items)");

    expect(loginButton).toBeInTheDocument();
})

it("Should change to login button to logout on click", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument("Logout");

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})