import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

// test("Should render the body component with Search button", async () => {
//    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
   
//    const searchBtn = screen.getByRole("button", {name: "Search"});

//    const searchInput =  screen.getByTestId("searchInput");

//    fireEvent.change(searchInput, { target: { value: "Burger"}});

//    fireEvent.click(searchBtn);
//    const cards = screen.getAllByTestId("resCard");
//    expect(cards.length).toBeGreaterThan(0);
// });

test("Should filter top rated restaurants", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(8);
 });