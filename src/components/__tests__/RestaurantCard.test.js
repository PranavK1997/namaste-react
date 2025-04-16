import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
    render(
        <RestaurantCard restroData={MOCK_DATA}/>
    )

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
})