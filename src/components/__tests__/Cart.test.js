import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});

it("Should load restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
            </BrowserRouter>
        )
    );

    const accordianHeader = screen.getByText("Deal Of The Day (3)");
    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(3);

    expect(screen.getByText("🛒 - (0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("🛒 - (1 items)")).toBeInTheDocument();
});
