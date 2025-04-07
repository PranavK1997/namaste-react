import RestaurantCard from "./RestaurantCard";
import restroList from "./../utils/mockData"
import { useState } from "react";

const Body = () => {
    // const [listOfRestaurants, setListOfRestaurants] = useState(restroList);

    const arr = useState(restroList);
    const [listOfRestaurants, setListOfRestaurants] = arr;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                   let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                   setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {
                    listOfRestaurants.map((restaurants) => (
                        <RestaurantCard key={restaurants.info.id} restroData={restaurants} />
                    ))                    
                }
            </div>
        </div>
    );
}

export default Body;