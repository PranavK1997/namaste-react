import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    console.log(listOfRestaurants);
  };

  const onlineStatus = useOnlinestatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection!!!
      </h1>
    );
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap justify-center gap-4 mb-6 mt-4">
        <div className="search flex items-center gap-2 m-2">
          <input
            type="text"
            className="border border-black px-2 py-1 rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search flex items-center gap-2 m-2">
          User Name:
          <input
            type="text"
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex items-center m-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-4">
        {filteredRestaurants.map((restaurants) => {
          return (
            <Link
              className="link-card"
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {restaurants.info.avgRating >= 4.5 ? (
                <RestaurantCardPromoted restroData={restaurants} />
              ) : (
                <RestaurantCard restroData={restaurants} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
