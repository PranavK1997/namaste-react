import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      console.log(json);
      const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    }

    return filteredRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) =>{setSearchText(e.target.value)}}/>
                <button onClick={() => {
                  const filteredRestaurant = listOfRestaurants.filter((restaurant) =>
                    restaurant.info.name.toLowerCase().includes(searchText)
                  );
                  setFilteredRestaurants(filteredRestaurant);
                }}>Search</button>
              </div>
                <button className="filter-btn" onClick={() => {
                   let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                   setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
  {
    filteredRestaurants.map((restaurants) => {
      return <RestaurantCard key={restaurants.info.id} restroData={restaurants} />;
    })
  }
</div>
        </div>
    );
}

export default Body;